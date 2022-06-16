import React from 'react'
import { Milestones, Story, Map } from '../../components'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='app__aboutus'>
        <Story />
        <Milestones />
        <Map />
    </div>
  )
}

export default AboutUs