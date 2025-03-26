import React from 'react'
import { Comment } from 'react-loader-spinner' // Make sure to import Comment

const Loader = () => {
  return (
    <Comment
      visible={true}
      height="24"
      width="24"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#111"
    />
  )
}

export default Loader
