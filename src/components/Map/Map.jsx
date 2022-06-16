import React from 'react'
import images from '../../constants/images'
import './Map.css'

const Map = () => {
  return (
    <div className='app__map'>
        <div className="app__map-content section__padding">
            <div className="map__info">
                <h2 className='map__info-title'> Working Hours</h2>
                <p>Sunday to Saturday  <br />
                09:00 AM to 11:00 PM</p>
                <p>Friday<br />
                02:00 PM to 1:00 AM</p>
                <h2 className='map__info-title'>Location</h2>
                <p>123 Nguyen Van A Street, Da Nang <br /> Vietnam<br />
                0123456789</p>
                <h2 className='map__info-title'>Contact Us</h2>
                <p>+123456789 <br />
                service@vufood.com</p>
            </div>
            <div className="map__image">
                <img src={images.map} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Map