import React from 'react'
import './Post.sass'

export default (props) => {
  return(
    <div className={props.mod ? `post ${props.mod}` : 'post'}>
      <div className="post__title">
        <h3 className="title title--h3">{props.title}</h3>
      </div>
      <div className="post__date">{props.date}</div>

      <div className="post__content">{props.text}</div>
    </div>
  )
}