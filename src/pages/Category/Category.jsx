import React from 'react'
import { CateHeader, CateItem, Map } from '../../components'
import './Category.css'

const Category = () => {
  return (
    <div className='app__categorypage'>
        <CateHeader />
        <CateItem />
        <Map />
    </div>
  )
}

export default Category