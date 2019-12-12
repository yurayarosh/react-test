import React from 'react'
import './Auth.sass'
import Form from '../../components/Form/Form'
import validate from '../../helpers/validation'

export default () => {
  const handleInputChange = ({
    name,
    constraints,
    errors,
    setFormErrors,
    setInputError,
    setInputTouch
  }, e) => {
    setInputTouch(true)
 
    const isValid = validate(e.target, constraints)
    setInputError(!isValid)

    const formErrors = { ...errors }

    if (isValid) {
      delete formErrors[name]
    } else {
      formErrors[name] = constraints
    }
    setFormErrors(formErrors)
  }


  const formControls = [
    {
      onChangeHandler: handleInputChange,
      label: 'Enter Email',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Enter valid email',
      constraints: {
        email: true
      }
    },
    {
      onChangeHandler: handleInputChange,
      label: 'Enter password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Enter valid password',
      constraints: {
        minLength: 5
      }
    }
  ]
  const formButtons = [
    {
      title: 'Login'
    }
  ]


  return (
    <div className="page page--full">
      <div className="page__form">
        <Form
          title="Authorization"
          controls={formControls}
          btns={formButtons}
        />
      </div>
    </div>
  )
}