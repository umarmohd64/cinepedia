import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./SearchResult.scss"

import InfiniteScroll from 'react-infinite-scroll-component'

import { fetchDataFromApi } from '../../utils/api.js'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import noResults from "../../assets/no-results.png"
import MovieCard from '../../components/movieCard/MovieCard'

import Spinner from '../../components/spinner/Spinner'



const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

    const fetchInitialData = () => {
      setLoading(true);
      fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
          (res) => {
              setData(res);
              setPageNum((prev) => prev + 1);
              setLoading(false);
          }
      );
  };

  const fetchNextPageData = () => {
      fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
          (res) => {
              if (data?.results) {
                  setData({
                      ...data,
                      results: [...data?.results, ...res.results],
                  });
              } else {
                  setData(res);
              }
              setPageNum((prev) => prev + 1);
          }
      );
  };

  useEffect( ()=>{
    fetchInitialData()
    setPageNum(1)

  },[query] )

  return (
    <div className="searchResultsPage">
         {loading && <Spinner initial={true} />}

         { !loading && (
          <ContentWrapper>
            { data?.results?.length > 0 ? (
              <>
                  <div className="pageTitle">
                    { `Search ${data.total_results>1? "results" : "result"} for "${query}" ` }
                  </div>

                  <InfiniteScroll 
                  className='content'
                  dataLength={data?.results?.length || []}
                  next={fetchNextPageData}
                  hasMore={ pageNum<=data?.total_pages }
                  loader={<Spinner/>}
                  >
                     { data?.results?.map((item,index) => {
                       if( item.media_type === "person" ) return;

                       return(
                         <MovieCard  
                           key={index}
                           fromSearch={true}
                           data={item} 
                         />
                       )
                     })}  
                  </InfiniteScroll>

              </>

            ) : 
            (
              <div className="no-results-page">
                <div className="no-results-img-section">
                    <img className='no-results-image' src={noResults} alt="" />

                </div>
                
                   <span className="resultNotFound">
                        Try searching for some different keyword.
                    </span>

              </div>
           
            ) }
          </ContentWrapper>
         ) }


    </div>
    
  )
}

export default SearchResult