import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"
import insta from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import social from "../../assets/social.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
const Footer = () => {
  return (
    <>
    <footer className="footer-box" id="contact">
            <span className="footer-content">Contact Us</span>
            <div className="footer-icon">
                <a href="https://www.instagram.com/vikesh_kapoor_vk/" target="_blank"><img src={insta}
                        alt="instagram logo" /></a>
                <span>/</span>
                <a href="https://www.linkedin.com/in/vikesh-kumar-vk" target="_blank"><img src={linkedin}
                        alt="linkedin logo" /></a>
                <span>/</span>
                <a href="mailto:vikeshkapoor100@gmail.com"><img src={social} alt="mail logo" /></a>
                <span>/</span>
                <a href="https://twitter.com/Vikeshkapoorvk" target="_blank"><img src={twitter}
                        alt="twitter logo" /></a>
                <span>/</span>
                <a href="https://www.facebook.com/vikeshkapoorvk" target="_blank"><img src={facebook}
                        alt="facebook logo" /></a>
            </div>
            <div className="footer-logo">
                <span><Link to="/">Event Registration</Link></span>
            </div>
        </footer>
    </>
  )
}

export default Footer