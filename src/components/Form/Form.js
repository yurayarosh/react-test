import React from 'react'
import Input from './Input/Input'
import Btn from './Btn/Btn'
import './Form.sass'
import { IS_DISABLED } from '../../helpers/constants'
import validate from '../../helpers/validation'

export default props => {
  const { mod, title, controls, btns, onSubmit, allowCreateTest, auth } = props

  const validatedControls = [...Object.values(controls)]
    .filter(control => control.constraints)
    .filter(control => !validate(control.value, control.constraints))

  let formErrors = {}
  validatedControls.forEach(control => {
    return (formErrors = {
      ...formErrors,
      [control.name]: control.constraints,
    })
  })

  const setBtnClassname = (btn, condition) => {
    return condition
      ? btn.mod
        ? `${btn.mod} btn--${IS_DISABLED}`
        : `btn--${IS_DISABLED}`
      : btn.mod
  }

  return (
    <div className={mod ? `form ${mod}` : 'form'}>
      <form onSubmit={onSubmit}>
        {title ? (
          <div className="form__title">
            <h2>{title}</h2>
          </div>
        ) : null}
        {[...Object.values(controls)].map((control, i) => (
          <div
            className={control.border ? 'form__field form__field--border' : 'form__field'}
            key={i}
          >
            <Input
              label={control.label}
              labelLg={control.labelLg}
              name={control.name}
              controlName={control.controlName}
              type={control.type}
              value={control.value || ''}
              disabled={control.disabled}
              index={control.index}
              placeholder={control.placeholder}
              options={control.options}
              errorMessage={control.errorMessage}
              constraints={control.constraints}
              onChangeHandler={control.onChangeHandler}
              isValid={control.isValid}
            />
          </div>
        ))}
        {!auth ? (
          <div className="form__field form__btns">
            <div className="form__btn">
              <Btn
                onClickHandler={btns[0].onClickHandler}
                mod={setBtnClassname(btns[0], Object.keys(formErrors).length > 0)}
                disabled={Object.keys(formErrors).length > 0}
              >
                {btns[0].title}
              </Btn>
            </div>

            <div className="form__btn">
              <Btn
                onClickHandler={btns[1].onClickHandler}
                mod={setBtnClassname(btns[1], !allowCreateTest)}
                disabled={!allowCreateTest}
              >
                {btns[1].title}
              </Btn>
            </div>
          </div>
        ) : (
          <div className="form__field form__btns">
            <div className="form__btn">
              <Btn
                onClickHandler={btns[0].onClickHandler}
                mod={setBtnClassname(btns[0], Object.keys(formErrors).length > 0)}
                disabled={Object.keys(formErrors).length > 0}
              >
                {btns[0].title}
              </Btn>
            </div>

            <div className="form__btn">
              <Btn
                onClickHandler={btns[1].onClickHandler}
                mod={setBtnClassname(btns[1], Object.keys(formErrors).length > 0)}
                disabled={Object.keys(formErrors).length > 0}
              >
                {btns[1].title}
              </Btn>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
