import React, { useState } from 'react'
import "./NavbarStyle.css"
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [shownav, setShownav] =  useState(false);
    const handleShownav = () => setShownav(!shownav);
  return (
    <>
    <div className='header'>
        <div className='nav-top p'>
            Accelerate your digital growth, Transform your business with our unified Solutions.
            <ul className='social-links'>
                <li>
                    <Link>F</Link>
                </li>
                <li>
                    <Link>T</Link>
                </li>
                <li>
                    <Link>L</Link>
                </li>
                <li>
                    <Link>C</Link>
                </li>
            </ul>
        </div>
        <div className='nav-menu p'>
            <Link to="/" className='font-bold logo'>SOFTTRONIC</Link>
            <ul className={shownav ? "nav-links nav-active" : "nav-links"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/support">Support</Link>
                </li>
                <li>
                    <Link to="/support">FAQs</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/blog" className='btn-blog'>Blog</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleShownav}>{
                shownav ? (<FaTimes size={24}/>) : (<FaBars size={24}/>)
            }  
            </div>
        </div>
    </div>
     </>
  )
}

export default Navbar