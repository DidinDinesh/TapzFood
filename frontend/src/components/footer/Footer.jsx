import React from 'react'
import './Footer.css'
import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer" id="footer">
     <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.tapzfood} alt="" />
            <p>The term dummy tag can have different 
                meanings depending on the context. 
                Here are two possibilities related to 
                web development
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>8156890206</li>
                <li>didindinesh5@gmail.com</li>
            </ul>
        </div>
     </div>
     <hr />
     <p className="footer-copyright">Copyright 2024 &#9400; Tapzfood.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
