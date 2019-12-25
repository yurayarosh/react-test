import React, { useState } from 'react'
import Form from '../../components/Form/Form'
import validate from '../../helpers/validation'

export default () => {
  const [questions, setQuestions] = useState([])

  const handleInputChange = (
    { value, name, id, constraints, errors, setFormErrors, setInputError, setInputTouch, setValue },
    e
  ) => {
    setInputTouch(true)
    if (value) setValue(e.target.value)

    const isValid = validate(e.target, constraints)
    setInputError(!isValid)

    const formErrors = { ...errors }

    if (isValid) {
      delete formErrors[name]
    } else {
      formErrors[name] = constraints
    }
    setFormErrors(formErrors)

    const isRightInput = id.indexOf(name) > -1
    const getField = val => (isRightInput ? val : null)

    const title = getField(e.target.value)
    // const rightAnswer = isRightInput &

    const currentQuestion = {
      id,
      title,
    }
    

    const questionsList = [...questions, currentQuestion]
    

    questionsList.forEach(obj => {
      console.log(obj)

      if(obj.id) console.log(obj.id.indexOf(name) > -1);
    })

    setQuestions(questionsList)

    console.log(questions)
  }

  const onAddQuestionClick = e => {
    e.preventDefault()
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    console.log('submit')
  }

  const formControls = [
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
    {
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
    {
      onChangeHandler: handleInputChange,
      label: 'Enter answer variant',
      name: 'answer-1',
      type: 'text',
      placeholder: 'Answer 1',
      errorMessage: 'Enter answer variant',
      constraints: {
        required: true,
      },
    },
    {
      onChangeHandler: handleInputChange,
      label: 'Enter answer variant',
      name: 'answer-2',
      type: 'text',
      placeholder: 'Answer 2',
      errorMessage: 'Enter answer variant',
      constraints: {
        required: true,
      },
    },
    {
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
  ]
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
