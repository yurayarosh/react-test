import React from 'react'
import './Btn.sass'

export default props => {
  const { href, mod, onClickHandler } = props
  const className = mod ? `btn ${mod}` : 'btn'
  return (
    <>
      {
        href
          ?
          <a
            className={className}
            href={href}
            onClick={onClickHandler}
          >{props.children}</a>
          :
          <button
            className={className}
            onClick={onClickHandler}
          >{props.children}</button>
      }
    </>
  )
}
