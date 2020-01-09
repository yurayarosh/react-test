import React, { useState } from 'react'
import Form from '../../components/Form/Form'
import validate from '../../helpers/validation'

export default () => {
  const [quiz, setQuiz] = useState([])

  const handleInputChange = (
    {
      name,
      constraints,
      errors,
      setFormErrors,
      setInputError,
      setInputTouch,
      setValue,
      controlName,
    },
    e
  ) => {
    setInputTouch(true)

    setValue(e.target.value)

    const isValid = validate(e.target, constraints)
    setInputError(!isValid)

    const formErrors = { ...errors }

    if (isValid) {
      delete formErrors[name]
    } else {
      formErrors[name] = constraints
    }
    setFormErrors(formErrors)

    const cntrls = { ...formControls }
    const currentControl = cntrls[controlName]

    // currentControl.id = id
    currentControl.value = e.target.value
    currentControl.isValid = isValid

    setFormControls({
      ...formControls,
      ...cntrls,
    })
  }

  const onAddQuestionClick = e => {
    e.preventDefault()
    const questions = [...quiz]
    const index = questions.length + 1
    const {question, rightAnswer} = formControls

    const questionItem = {
      id: index,
      title: question.value,
      rightAnswer: +rightAnswer.value,
      // currentAnswer: null,
      // answers: [
      //   { isHandling: false, id: 1, title: '48' },
      //   { isHandling: false, id: 2, title: '12' },
      //   { isHandling: false, id: 3, title: '18' },
      //   { isHandling: false, id: 4, title: '24' },
      // ],
    }

    console.log(questionItem)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    console.log('submit')
  }

  const [formControls, setFormControls] = useState({
    // {
    //   onChangeHandler: handleInputChange,
    //   label: 'Enter test name',
    //   name: 'test-name',
    //   type: 'text',
    //   placeholder: 'Enter test name',
    //   errorMessage: 'Enter test name',
    //   border: true,
    //   constraints: {
    //     required: true,
    //   },
    // },
    question: {
      onChangeHandler: handleInputChange,
      label: 'Enter the question',
      name: 'question',
      type: 'text',
      placeholder: 'Enter question',
      errorMessage: 'Enter question',
      border: true,
      value: 'blah',
      constraints: {
        required: true,
      },
    },
    answer1: {
      onChangeHandler: handleInputChange,
      label: 'Enter answer variant',
      name: 'answer',
      type: 'text',
      placeholder: 'Answer 1',
      index: 0,
      errorMessage: 'Enter answer variant',
      constraints: {
        required: true,
      },
    },
    answer2: {
      onChangeHandler: handleInputChange,
      label: 'Enter answer variant',
      name: 'answer',
      type: 'text',
      placeholder: 'Answer 2',
      index: 1,
      errorMessage: 'Enter answer variant',
      constraints: {
        required: true,
      },
    },
    rightAnswer: {
      onChangeHandler: handleInputChange,
      label: 'Enter right answer',
      name: 'right-answer',
      type: 'select',
      placeholder: '',
      errorMessage: 'Enter right answer',
      value: 1,
      options: [
        { value: 1, title: 1 },
        { value: 2, title: 2 },
        { value: 3, title: 3 },
        { value: 4, title: 4 },
      ],
      constraints: {
        required: true,
      },
    },
  })

  for (const key in formControls) {
    if (formControls.hasOwnProperty(key)) {
      const control = formControls[key]
      control.controlName = key
    }
  }

  const formButtons = [
    {
      onClickHandler: onAddQuestionClick,
      title: 'Add question',
    },
    {
      // onClickHandler: onSubmit,
      title: 'Create test',
      mod: 'btn--secondary',
    },
  ]

  return (
    <div className="page page--full">
      <h1 className="title title--h1 section__title">Create new test</h1>

      <div className="page__form">
        <Form title="" controls={formControls} btns={formButtons} onSubmit={onSubmitHandler} />
      </div>
    </div>
  )
}
