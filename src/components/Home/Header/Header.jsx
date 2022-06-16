import React from 'react'
import images from '../../../constants/images'
import './Header.css'

const Header = () => {
  return (
    <div className='app__header section__padding'>
        <div className='app__header-info'>
            <h1 className='header__info-title'>Let's Travel & Eat</h1>
            <p className='header__info-desc'>Lorem ipsum dolor sit amet. Ab aspernatur ducimus id illo quidem eos commodi excepturi. Eos sunt voluptas ut molestiae laboriosam est commodi necessitatibus.</p>
            <button className='app__button'>View</button>
        </div>
        <div className='app__header-image'>
            <img src={images.header} alt="" />
        </div>
    </div>
  )
}

export default Header