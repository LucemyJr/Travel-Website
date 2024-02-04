import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top-footer">
        <div>
            <h1>Jetgo</h1>
            <p>Choose your favorite destination</p>
        </div>
        <div>
            <a href="https://www.instagram.com/lucemyfr/" target='blank'>
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="https://twitter.com/lucemyFR" target='blank'>
                <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a href="https://github.com/LucemyJr" target='blank'>
                <i className="fa-brands fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/lucemyferreira/" target='blank'>
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/contact">Contact Us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privact Policy</a>
            <a href="/">License</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
