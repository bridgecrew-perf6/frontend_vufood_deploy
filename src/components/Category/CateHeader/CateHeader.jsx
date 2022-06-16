import React from 'react'
import './CateHeader.css'

const CateHeader = () => {
  return (
    <div className='app__cateheader section__padding'>
        <div className='app__cateheader-title'>
            <div className='cateheader__subtitle'>
                <p>Categories</p>
                <div className='cateheader__subtitle-line'></div>
            </div>
            <div className='cateheader__title'>
                <h1>Discover Our trips</h1>
            </div>
        </div>
        <div className='app__cateheader-info'>
            <p>Lorem ipsum dolor sit amet. Ab aspernatur ducimus id illo quidem eos commodi excepturi.</p>
        </div>
    </div>
  )
}

export default CateHeader