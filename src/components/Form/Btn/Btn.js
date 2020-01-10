import React from 'react'
import './Btn.sass'

export default props => {
  const { href, mod, disabled, onClickHandler } = props
  const className = mod ? `btn ${mod}` : 'btn'

  return (
    <>
      {href ? (
        <a className={className} href={href} onClick={onClickHandler} disabled={disabled}>
          {props.children}
        </a>
      ) : (
        <button className={className} onClick={onClickHandler} disabled={disabled}>
          {props.children}
        </button>
      )}
    </>
  )
}
