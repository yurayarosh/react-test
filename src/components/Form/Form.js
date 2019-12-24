import React, { useState } from 'react'
import Input from './Input/Input'
import Btn from './Btn/Btn'
import './Form.sass'
import { IS_DISABLED } from '../../helpers/constants'
import validate from '../../helpers/validation'

export default props => {
  const { mod, title, controls, btns, onSubmit } = props
  const validatedControls = [...controls]
    .filter(control => control.constraints)
    // .filter(control => !validate(control.value, control.constraints))

  let formErrors
  validatedControls.forEach(control => {
    return (formErrors = {
      ...formErrors,
      [control.name]: control.constraints,
    })
  })

  console.log(formErrors);
  

  const [errors, setFormErrors] = useState(formErrors)

  // const submitHandler = e => {
  //   e.preventDefault()
  // }

  return (
    <div
      className={mod ? `form ${mod}` : 'form'}
      // onSubmit={submitHandler}
    >
      <form onSubmit={onSubmit}>
        {title ? (
          <div className="form__title">
            <h2>{title}</h2>
          </div>
        ) : null}
        {controls.map((control, i) => (
          <div
            className={control.border ? 'form__field form__field--border' : 'form__field'}
            key={i}
          >
            <Input
              label={control.label}
              name={control.name}
              type={control.type}
              value={control.value}
              placeholder={control.placeholder}
              options={control.options}
              errorMessage={control.errorMessage}
              constraints={control.constraints}
              errors={errors}
              setFormErrors={setFormErrors}
              onChangeHandler={control.onChangeHandler}
              isValid={control.isValid}
            />
          </div>
        ))}
        {btns.length > 1 ? (
          <div className="form__field form__btns">
            {btns.map((btn, i) => (
              <div className="form__btn" key={i}>
                <Btn onClickHandler={btn.onClickHandler} mod={btn.mod}>
                  {btn.title}
                </Btn>
              </div>
            ))}
          </div>
        ) : (
          <div className="form__field">
            <Btn
              onClickHandler={btns[0].onClickHandler}
              mod={
                Object.keys(errors).length > 0
                  ? btns[0].mod
                    ? `${btns[0].mod} btn--${IS_DISABLED}`
                    : `btn--${IS_DISABLED}`
                  : btns[0].mod
              }
            >
              {btns[0].title}
            </Btn>
          </div>
        )}
      </form>
    </div>
  )
}
