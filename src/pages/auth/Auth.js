import React, { useState } from 'react'
import './Auth.sass'
import Form from '../../components/Form/Form'
import validate from '../../helpers/validation'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/auth'

function Auth(props) {
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

  function onSignInHandler(e) {
    e.preventDefault()
    props.auth({
      email: formControls.email.value,
      password: formControls.password.value,
      isLogin: true
    })
  }

  function onSignUpHandler(e) {
    e.preventDefault()
    props.auth({
      email: formControls.email.value,
      password: formControls.password.value,
      isLogin: false
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
      onClickHandler: onSignInHandler,
      title: 'Login',
    },
    {
      onClickHandler: onSignUpHandler,
      title: 'Signup',
      mod: 'btn--secondary',
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
        <Form auth={true} title="Authorization" controls={formControls} btns={formButtons} />
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    auth: ({ email, password, isLogin }) => dispatch(auth({ email, password, isLogin })),
  }
}

export default connect(null, mapDispatchToProps)(Auth)
