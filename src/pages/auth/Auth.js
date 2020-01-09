import React, { useState } from 'react'
import './Auth.sass'
import Form from '../../components/Form/Form'
import validate from '../../helpers/validation'

export default () => {
  const handleInputChange = (
    { name, constraints, errors, setFormErrors, setInputError, setInputTouch, controlName },
    e
  ) => {
    setInputTouch(true)

    const isValid = validate(e.target, constraints)
    setInputError(!isValid)

    const formErrors = { ...errors }

    if (isValid) {
      delete formErrors[name]
    } else {
      formErrors[name] = constraints
    }
    // setFormErrors(formErrors)

    const ctrls = { ...baseControls }

    const currentControl = ctrls[controlName]

    currentControl.value = e.target.value
    currentControl.isValid = isValid

    setFormControls({
      ...formControls,
      ...ctrls,
    })
  }

  const baseControls = {
    email: {
      onChangeHandler: handleInputChange,
      label: 'Enter Email',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Enter valid email',
      constraints: {
        email: true,
      },
    },
    password: {
      onChangeHandler: handleInputChange,
      label: 'Enter password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Enter valid password',
      constraints: {
        minLength: 5,
      },
    },
  }

  const formButtons = [
    {
      title: 'Login',
    },
  ]

  const [formControls, setFormControls] = useState(baseControls)

  for (const key in formControls) {
    if (formControls.hasOwnProperty(key)) {
      const control = formControls[key]
      control.controlName = key
    }
  }

  return (
    <div className="page page--full">
      <div className="page__form">
        <Form title="Authorization" controls={formControls} btns={formButtons} />
      </div>
    </div>
  )
}
