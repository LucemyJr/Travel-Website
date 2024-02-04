import React from 'react'
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import ContactImg from '../../assets/4.jpg'
import Footer from '../Footer/Footer';


const Contact = () => {
  return (
    <>
      <Navbar />
      <MainBanner 
        cName = "main-banner-mid"
        MainBannerImg = {ContactImg}
        tittle = "Contact"
        btnClass = "hide"
      />

      <Footer/>
    </>
  )
}

export default Contact
