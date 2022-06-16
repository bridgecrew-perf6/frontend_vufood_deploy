import React from 'react'
import images from '../../../constants/images'
import './Comment.css'

const Comment = () => {
  return (
    <div className='app__comment section__padding'>
      <div className='app__comment-title'>
        <p>COMMENT</p>
      </div>
      <div className='app__comment-comments'>
        <div className='comments__avatar'>
          <img src={images.cuisine} alt="" />
        </div>
        <div className='comments__content'>
          <p>Lorem ipsum dolor sit amet. 33 quod cupiditate aut velit numquam et repudiandae quia. Est inventore dolores ad dolorum sunt est veritatis necessitatibus eos quasi cumque. Ea dolorem recusandae qui minus laborum eum quae voluptatem animi ipsum est deleniti adipisci aut laudantium velit qui aliquam ullam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment