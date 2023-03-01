import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Featured from '../../components/featured/Featured'
import Features from '../../components/features/Features'
import ProjectCarousel from '../../components/projectCarousel/ProjectCarousel'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Carousel/>
      <Features/>
      <ProjectCarousel/>
    </div>
  )
}

export default Home