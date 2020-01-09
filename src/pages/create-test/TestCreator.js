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
      setInputError,
      setInputTouch,
      controlName,
    },
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

    const ctrls = { ...baseControls }

    const currentControl = ctrls[controlName]

    currentControl.value = e.target.value
    currentControl.isValid = isValid

    setFormControls({
      ...formControls,
      ...ctrls,
    })
  }

  const onAddQuestionClick = e => {
    e.preventDefault()
    const questions = [...quiz]
    const index = questions.length + 1
    const { question, rightAnswer, answer1, answer2, answer3, answer4 } = formControls

    const questionItem = {
      id: index,
      title: question.value,
      rightAnswer: +rightAnswer.value,
      answers: [
        { id: 1, title: answer1.value },
        { id: 2, title: answer2.value },
        { id: 3, title: answer3.value },
        { id: 4, title: answer4.value },
      ],
    }

    questions.push(questionItem)
    setQuiz(questions)

    setFormControls(baseControls)

    // console.log(formControls)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    console.log('submit')
  }

  const baseControls = {
    // title: {
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
      value: '',
      constraints: {
        required: true,
      },
    },
    answer1: {
      onChangeHandler: handleInputChange,
      label: 'Enter answer variant',
      name: 'answer1',
      type: 'text',
      placeholder: 'Answer 1',
      errorMessage: 'Enter answer variant',
      constraints: {
        required: true,
      },
    },
    answer2: {
      onChangeHandler: handleInputChange,
      label: 'Enter answer variant',
      name: 'answer2',
      type: 'text',
      placeholder: 'Answer 2',
      errorMessage: 'Enter answer variant',
      constraints: {
        required: true,
      },
    },
    answer3: {
      onChangeHandler: handleInputChange,
      label: 'Enter answer variant',
      name: 'answer3',
      type: 'text',
      placeholder: 'Answer 3',
      errorMessage: 'Enter answer variant',
      constraints: {
        required: true,
      },
    },
    answer4: {
      onChangeHandler: handleInputChange,
      label: 'Enter answer variant',
      name: 'answer4',
      type: 'text',
      placeholder: 'Answer 4',
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
  }

  const [formControls, setFormControls] = useState(baseControls)

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
