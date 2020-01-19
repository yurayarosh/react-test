import React, { useState } from 'react'
import './Input.sass'
import { HAS_ERROR, IS_VALID, IS_DISABLED } from '../../../helpers/constants'
import validate from '../../../helpers/validation'

export default props => {
  const {
    name,
    type,
    label,
    labelLg,
    placeholder,
    mod,
    value,
    disabled,
    options,
    constraints,
    errorMessage,
    onChangeHandler,
    controlName,
  } = props
  const [hasError, setInputError] = useState(false)
  const [isTouched, setInputTouch] = useState(false)
  const isValid = validate(value, constraints)

  const id = `${name}-${new Date().getTime()}`

  const className = mod ? `input ${mod}` : 'input'
  const getMod = () => {
    let inpMod = []
    if (type === 'select') inpMod = [...inpMod, 'input--select']
    if (isValid) inpMod = [...inpMod, `input--${IS_VALID}`]

    if (isTouched && hasError) {
      inpMod.push(`input--${HAS_ERROR}`)
      const validClassIndex = inpMod.indexOf(`input--${IS_VALID}`)
      if (validClassIndex > 0) inpMod.splice(validClassIndex, 1)
    }

    if(disabled) inpMod.push(`input--${IS_DISABLED}`)

    return inpMod.join(' ')
  }
  const cls = [className, getMod()]

  return (
    <div className={cls.join(' ')}>
      {label || labelLg ? (
        <label htmlFor={id} className={labelLg ? 'input__label input__label--lg' : 'input__label'}>
          {label || labelLg}
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
          disabled={disabled}
          onChange={
            onChangeHandler
              ? onChangeHandler.bind(this, {
                  ...props,
                  id,
                  setInputError,
                  setInputTouch,
                  controlName,
                })
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
          disabled={disabled}
          onChange={
            onChangeHandler
              ? onChangeHandler.bind(this, {
                  ...props,
                  id,
                  setInputError,
                  setInputTouch,
                  controlName,
                })
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
