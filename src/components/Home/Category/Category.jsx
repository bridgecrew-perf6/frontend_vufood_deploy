import React from 'react'
import images from '../../../constants/images'
import './Category.css'

const Category = () => {
  return (
    <div className='app__category section__padding'>
        <div className='app__category-image'>
            <img src={images.category} alt="" />
        </div>
        <div className='app__category-info'>
            <h1 className='category__info-title'>
                Various Categories
            </h1>
            <p className='category__info-desc'>
                Lorem ipsum dolor sit amet. Ab aspernatur ducimus id illo quidem eos commodi excepturi.
            </p>
            <button className='app__button'>View</button>
            <div className='category__info-image'>
                <img src={images.cate1} alt="" />
                <img src={images.cate2} alt="" />
                <img src={images.cate3} alt="" />
            </div>
            <div className='category__lastline'>
                
            </div>
        </div>
    </div>
  )
}

export default Category