import React from 'react'
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import AboutImg from '../../assets/2.jpg'
import Footer from '../Footer/Footer';


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

      <Footer/>
    </>
  )
}

export default About
