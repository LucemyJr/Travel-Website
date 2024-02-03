import React from 'react'
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import ServiceImg from '../../assets/3.jpg'


const Service = () => {
  return (
    <>
      <Navbar />
      <MainBanner 
        cName = "main-banner-mid"
        MainBannerImg = {ServiceImg}
        tittle = "About Us"
        btnClass = "hide"
      />
    </>
  )
}

export default Service
