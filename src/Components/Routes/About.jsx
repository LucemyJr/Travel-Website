import React from 'react'
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import AboutImg from '../../assets/2.jpg'
import Footer from '../Footer/Footer';
import AboutSection from '../AboutSection/AboutSection';

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
      <AboutSection/>
      <Footer/>
    </>
  )
}

export default About
