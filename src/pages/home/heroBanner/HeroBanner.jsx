import React, {useState, useEffect} from 'react'
import "./HeroBanner.scss"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Img from "../../../components/lazyLoadImage/Img.jsx"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx"

import useFetch from '../../../hooks/useFetch';



const HeroBanner = () => {


    const [background, setBackground]= useState("");
    const [query, setQuery] = useState("")
    const navigate= useNavigate()
    const { url } = useSelector ( (state) => state.home )

    const {data,loading}= useFetch( "/movie/upcoming" )

    useEffect( () => {
      const bg= url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
      setBackground(bg)
    }, [data] )

    const searchQueryHandler = (event) =>{
      if(event.key === "Enter" && query.length !=0)
        navigate(`/search/${query}`)
    }

  return (
    <div className="heroBanner">

      { !loading && (<div className="backdrop-img">

        <Img src={background} />

      </div>)
      }

      <div className="opacity-layer"></div>

      <ContentWrapper>

         <div className="heroBannerContent">
           <span className='title' >
                Welcome.
           </span>
           <span className="subtitle">
                Unlock the treasures of films and TV shows.
                Explore Now.
           </span>
           <div className="searchInput">
             <input 
             type="text"
             placeholder='Search any movie or TV show... '
             onKeyUp={searchQueryHandler}
             onChange={ (event)=> setQuery(event.target.value) }
              />

              <button onClick={ ()=> navigate(`/search/${query}`) } >Search</button>
           </div>
         </div>

      </ContentWrapper>

       
      
    </div>
  )
}

export default HeroBanner