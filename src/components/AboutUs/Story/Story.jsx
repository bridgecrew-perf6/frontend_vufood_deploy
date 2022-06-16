import React from 'react'
import images from '../../../constants/images'
import './Story.css'

const Story = () => {
  return (
    <div className='app__story section__padding'>
        <div className='app__story-title'>
            Our Story
        </div>
        <div className='app__story-content'>
            <div className='story__content-image'>
                <p>Lorem ipsum dolor sit amet. Ab aspernatur ducimus id illo quidem eos commodi excepturi.</p>
                <div className='story__image'>
                    <img src={images.about1} alt="" />
                    <img src={images.about2} alt="" />
                </div>
            </div>
            <div className='story__content-blogger'>
                <h3>Best Blogger</h3>
                <p>
                We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted. We can confidently claim that our menu is unlike anything else offered in the industry. 
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus mauris nec tincidunt varius. Ut sagittis, lorem at bibendum ornare, mauris neque venenatis justo, ut gravida mi neque eu lorem. Vestibulum auctor leo sit amet vulputate mollis. Curabitur ac lorem felis. Morbi ullamcorper maximus lorem.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Story