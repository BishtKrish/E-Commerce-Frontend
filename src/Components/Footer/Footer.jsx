import React from 'react'
import './Footer.css'
import newlogo from '../Assests/newlogo.png'
import instagram from '../Assests/instagram_icon.png'
import pintestar from '../Assests/pintester_icon.png'
import whatsapp from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={newlogo} alt="" />
        
        
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintestar} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
