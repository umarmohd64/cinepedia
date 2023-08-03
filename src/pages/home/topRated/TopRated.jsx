import React,{useState}  from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs.jsx'

import useFetch from '../../../hooks/useFetch.jsx'
import Carousel from '../../../components/carousel/Carousel.jsx'


const TopRated = () => {  //for API CALLING

    const [endPoint, setEndPoint]=useState("tv")

    const {data,loading}= useFetch( `/${endPoint}/top_rated`  )

    const onTabChange= (tab) =>{
      setEndPoint( (tab)==="Movies" ?"movie" :"tv" )
        
    }

  return (


    <div className='carouselSection' >

        <ContentWrapper>
             <span className='carouselTitle' >Top Rated</span>
             <SwitchTabs 
             data={ ["TV Shows", "Movies"] } 
             onTabChange= {onTabChange}
               />

        </ContentWrapper>

        <Carousel
         data={data?.results}
         loading={loading}
         endPoint={endPoint}/>

    </div>
  )
}

export default TopRated