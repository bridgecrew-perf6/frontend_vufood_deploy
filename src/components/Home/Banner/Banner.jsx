import React from 'react'
import images from '../../../constants/images'
import './Banner.css'

const Banner = () => {
  return (
    <div className='app__banner'>
        <div className='app__banner-title'>
            <h1>A journey that reflects the true essence of the cuisine</h1>
        </div>
        <div className='app__banner-image'>
           <img src={images.cuisine} alt="" />
        </div>
    </div>
  )
}

export default Banner