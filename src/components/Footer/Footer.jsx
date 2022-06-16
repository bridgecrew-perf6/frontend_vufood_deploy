import React from 'react'
import './Footer.css'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='app__footer-name'>
            <h1>VuFood</h1>
        </div>
        <div className='app__footer-socials'>
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
        </div>
        <div className='app__footer-credit'>
            <span>© 2022 | All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer