import React, { useState } from 'react'
import './Input.sass'
import { HAS_ERROR, IS_VALID } from '../../helpers/constants'

export default props => {
  const {
    name,
    type,
    id,
    label,
    placeholder,
    mod,
    value,
    errorMessage,
    onChangeHandler
  } = props
  const [hasError, setInputError] = useState(false)
  const [isTouched, setInputTouch] = useState(false)

  const className = mod ? `input ${mod}` : 'input'
  const cls = []

  cls.push(className)
  if (isTouched && hasError) cls.push(`input--${HAS_ERROR}`)
  else if (isTouched) cls.push(`input--${IS_VALID}`)

  return (
    <div
      className={cls.join(' ')}>
      {
        label
          ? <label htmlFor={id} className="input__label">{label}</label>
          : null
      }
      <input
        id={id}
        name={name}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler ? onChangeHandler.bind(this, { ...props, setInputError, setInputTouch }) : null}
      />
      {
        hasError
          ?
          <label className="input__label input__label--error">{errorMessage || 'This field is required'}</label>
          : null
      }
    </div>
  )
}