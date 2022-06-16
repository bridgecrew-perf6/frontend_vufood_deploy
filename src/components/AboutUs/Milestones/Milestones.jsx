import React from 'react'
import './Milestones.css'

const Milestones = () => {
  return (
    <div className='app__milestones section__padding'>
      <div className='app__milestones-content'>
        <div className='milestone'>
          <div className='milestone__line'></div>
          <h1>mm/yyyy</h1>
          <h3>Milestone One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='milestone'>
          <div className='milestone__line'></div>
          <h1>mm/yyyy</h1>
          <h3>Milestone Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='milestone'>
          <div className='milestone__line'></div>
          <h1>mm/yyyy</h1>
          <h3>Milestone Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='milestone'>
          <div className='milestone__line'></div>
          <h1>mm/yyyy</h1>
          <h3>Milestone Four</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Milestones