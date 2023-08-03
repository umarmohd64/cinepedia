import React from 'react'
import "./Home.scss"
import Trending from './trending/Trending.jsx'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

import HeroBanner from './heroBanner/HeroBanner.jsx'

const Home = () => {
  return (
    <div className='homePage' >
          <HeroBanner />
          <Trending />
          <Popular />
          <TopRated />

    </div>
  )
}

export default Home