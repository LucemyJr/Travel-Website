import React from 'react'
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainBanner 
        cName = "main-banner"
        MainBannerImg = "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        tittle = "Your Journey Your Story"
        text = "Choose Your Favorite Destination"
        btnText = "Travel Plan"
        url = "/"
        btnClass = "show"
      />
    </>
  )
}

export default Home
