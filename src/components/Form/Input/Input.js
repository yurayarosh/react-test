import React, { useState } from 'react'
import './Input.sass'
import { HAS_ERROR, IS_VALID } from '../../../helpers/constants'
import validate from '../../../helpers/validation'

export default props => {
  const {
    name,
    type,
    id,
    label,
    placeholder,
    mod,
    value,
    options,
    constraints,
    errorMessage,
    onChangeHandler,
  } = props
  const [hasError, setInputError] = useState(false)
  const [isTouched, setInputTouch] = useState(false)
  const isValid = validate(value, constraints)  

  const className = mod ? `input ${mod}` : 'input'
  const getStaticMod = () => {
    let mod = []
    if (type === 'select') mod.push('input--select')
    if(isValid) mod.push(`input--${IS_VALID}`)
    return mod.join(' ')
  }
  const cls = [className, getStaticMod()]

  if (isTouched && hasError) cls.push(`input--${HAS_ERROR}`)
  else if (isTouched) cls.push(`input--${IS_VALID}`)

  console.log(hasError, name);
  

  return (
    <div className={cls.join(' ')}>
      {label ? (
        <label htmlFor={id} className="input__label">
          {label}
        </label>
      ) : null}
      {type === 'select' ? (
        <select
          className={
            type ? `input__field input__field--${type}` : 'input__field input__field--text'
          }
          id={id}
          name={name}
          value={value}
          onChange={
            onChangeHandler
              ? onChangeHandler.bind(this, { ...props, setInputError, setInputTouch })
              : null
          }
        >
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={
            type ? `input__field input__field--${type}` : 'input__field input__field--text'
          }
          id={id}
          name={name}
          type={type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={
            onChangeHandler
              ? onChangeHandler.bind(this, { ...props, setInputError, setInputTouch })
              : null
          }
        />
      )}

      {hasError ? (
        <label className="input__label input__label--error">
          {errorMessage || 'This field is required'}
        </label>
      ) : null}
    </div>
  )
}
