import React from 'react'
import { Banner, Category, Header, Quote } from '../../components'
import './Home.css'

const Home = () => {
  return (
    <div className='app__homepage'>
        <Header />
        <Category />
        <Quote />
        <Banner />
    </div>
  )
}

export default Home