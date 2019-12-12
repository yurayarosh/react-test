import React, { useState } from 'react'
import Input from '../Input/Input'
import Btn from '../Btn/Btn'
import './Form.sass'
import { IS_DISABLED } from '../../helpers/constants';

export default props => {
  const { mod, title, controls, btns } = props
  const validatedControls = [...controls].filter(control => control.constraints)

  let formErrors
  validatedControls.forEach((control) => 
    formErrors = {
      ...formErrors,
      [control.name]: control.constraints
    }    
  )

  const [errors, setFormErrors] = useState(formErrors)  

  // const submitHandler = e => {
  //   e.preventDefault()
  // }

  

  return (
    <div
      className={mod ? `form ${mod}` : 'form'}
      // onSubmit={submitHandler}
    >
      {
        title
          ?
          <div className="form__title">
            <h2>{title}</h2>
          </div>
          : null
      }
      {
        controls.map((control, i) =>
          <div className="form__field" key={i}>
            <Input
              label={control.label}
              name={control.name}
              type={control.type}
              placeholder={control.placeholder}
              errorMessage={control.errorMessage}
              constraints={control.constraints}
              errors={errors}
              setFormErrors={setFormErrors}
              onChangeHandler={control.onChangeHandler}
            />
          </div>
        )
      }
      {
        btns.length > 1
          ?
          <div className="form__field form__btns">
            {
              btns.map((btn, i) =>
                <div className="form__btn" key={i}>
                  <Btn>{btn.title}</Btn>
                </div>
              )
            }
          </div>
          :
          <div className="form__field">
            <Btn
              mod={Object.keys(errors).length > 0 ? `btn--${IS_DISABLED}` : null}
            >
              {btns[0].title}
            </Btn>
          </div>
      }

    </div>
  )
}