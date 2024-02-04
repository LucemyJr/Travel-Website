import React from 'react'
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import HomeImg from '../../assets/1.jpg'
import Destination from '../Destination/Destination';
import Trip from '../Trip/Trip';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainBanner 
        cName = "main-banner"
        MainBannerImg = {HomeImg}
        tittle = "Your Journey Your Story"
        text = "Choose Your Favorite Destination"
        btnText = "Travel Plan"
        url = "/"
        btnClass = "show"
      />
      <Destination/>

      <Trip/>
    </>
  )
}

export default Home
