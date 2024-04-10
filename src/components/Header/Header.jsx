import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from "../../assets/Images/image_prev_ui.png"
const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='header-logo '>
            <img src={Logo} alt="Header-Logo" />
        </div>
        <div className='header-section-items gap-5 d-flex align-items-center '>
        <Link to="/" className='link'><span>Tools</span></Link> 
        <Link to="/" className='link'><span>Support</span></Link> 
        <Link to="/" className='link'><span>Community</span></Link> 
        <Link to="/" className='link'><span>Pricing</span></Link> 
        </div>
        <div className='header-bookdemo'>
            Book a Demo
        </div>
    </div>
    </>
    
  )
}

export default Header