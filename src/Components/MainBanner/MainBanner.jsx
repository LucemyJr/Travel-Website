import React from 'react'
import "./MainBanner.css"

const MainBanner = (props) => {
  return (
    <>
        <div className= {props.cName}>
            <img src= {props.MainBannerImg} alt="MainBannerImg" />

            <div className="main-banner-text">
              <h1>{props.tittle}</h1>
              <p>{props.text}</p>
              <a href= {props.url} className= {props.btnClass}>
                {props.btnText}
              </a>
            </div>
            
        </div>
    </>
  )
}

export default MainBanner
