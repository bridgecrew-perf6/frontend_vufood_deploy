import React from 'react'
import images from '../../../constants/images'
import './ItemCate.css'

const ItemCate = ({ item }) => {
  return (
    <div className='app__itemcate'>
        <div className='app__itemcate-image'>
            <img src={item.image} alt="" />
        </div>
        <div className='app__itemcate-title'>
            {item.name}
        </div>
    </div>
  )
}

export default ItemCate