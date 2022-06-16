import React from 'react'
import { Comment, Post } from '../../components'
import './SinglePost.css'

const SinglePost = () => {
  return (
    <div className='app__singlepost'>
        <Post />
        <Comment />
    </div>
  )
}

export default SinglePost