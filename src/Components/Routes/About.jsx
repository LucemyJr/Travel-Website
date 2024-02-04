import React from 'react'
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import AboutImg from '../../assets/2.jpg'


const About = () => {
  return (
    <>
      <Navbar />
      <MainBanner 
        cName = "main-banner-mid"
        MainBannerImg = {AboutImg}
        tittle = "About Us"
        btnClass = "hide"
      />
    </>
  )
}

export default About
