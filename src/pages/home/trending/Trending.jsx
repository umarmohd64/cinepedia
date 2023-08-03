import React,{useState}  from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper.jsx'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs.jsx'

import useFetch from '../../../hooks/useFetch.jsx'
import Carousel from '../../../components/carousel/Carousel.jsx'



const Trending = () => {  //for API CALLING

    const [endPoint, setEndPoint]=useState("day")

    const {data,loading}= useFetch( `/trending/all/${endPoint}`  )

    const onTabChange= (tab) =>{
      setEndPoint( tab==="Day" ?"day" :"week" )
        
    }

  return (


    <div className='carouselSection' >

        <ContentWrapper>
             <span className='carouselTitle' >Trending</span>
             <SwitchTabs 
             data={ ["Day", "Week",] } 
             onTabChange= {onTabChange}
               />

        </ContentWrapper>

        <Carousel
         data={data?.results}
         loading={loading}
         endPoint={endPoint} />

    </div>
  )
}

export default Trending