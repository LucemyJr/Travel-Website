import React from 'react'
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import ServiceImg from '../../assets/3.jpg'
import Footer from '../Footer/Footer';
import Trip from '../Trip/Trip';


const Service = () => {
  return (
    <>
      <Navbar />
      <MainBanner 
        cName = "main-banner-mid"
        MainBannerImg = {ServiceImg}
        tittle = "Service"
        btnClass = "hide"
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service
