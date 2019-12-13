import React from 'react'
import ToDoListItem from '../ToDoListItem/ToDoListItem'
import './ToDoList.sass'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Btn from '../Btn/Btn'
import Input from '../Input/Input'

export default function ToDoList({ list, update }) {
  const itemsLeft = list.filter(item => !item.done).length

  function handleSubmit(e) {
    e.preventDefault()
    const input = e.target.querySelector('input')
    const value = input.value

    if (value.length < 1) {
      alert('You must write something!')
      return
    }

    const itemState = {
      title: value,
      done: false,
    }

    const updList = [...list, itemState]

    update({
      toDoListItems: updList,
    })
    input.value = ''
    input.focus()
  }

  function handleRemoveAllBtnClick() {
    update({
      toDoListItems: [],
    })
  }

  function handleRemoveDoneBtnClick(e) {
    const filter = list.filter(item => !item.done)

    update({
      toDoListItems: filter,
    })

    const wrap = e.target.closest('.to-do-list')
    const listItems = [...wrap.querySelectorAll('.to-do-list-item')]

    listItems.forEach(item => {
      item.classList.remove('is-done')
    })
  }

  function handleCheckAllChange(e) {
    const wrap = e.target.closest('.to-do-list')
    const listItems = [...wrap.querySelectorAll('.to-do-list-item')]

    if (e.target.checked) {
      list.forEach(item => {
        item.done = true
      })
      listItems.forEach(item => {
        item.classList.add('is-done')
      })
    } else {
      list.forEach(item => {
        item.done = false
      })
      listItems.forEach(item => {
        item.classList.remove('is-done')
      })
    }

    update({
      toDoListItems: list,
    })
  }

  return (
    <div className="to-do-list">
      <div className="to-do-list__form">
        <form action="" onSubmit={handleSubmit}>
          <Input></Input>
          {/* <div className="input">
              <input type="text"/>
            </div> */}
          <Btn>add</Btn>
        </form>
      </div>

      <TransitionGroup className="to-do-list__list">
        {list.map((item, i) => (
          <CSSTransition key={i} classNames="fade" timeout={300}>
            <ToDoListItem
              // className={item.done ? 'to-do-list-item is-done' : 'to-do-list-item'}
              index={i}
              title={item.title}
              list={list}
              update={update}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {list.length > 0 ? (
        <>
          <div className="to-do-list__checkbox">
            <label>
              <input type="checkbox" onChange={handleCheckAllChange} />
              check all
            </label>
            <div className="to-do-list__left">left {itemsLeft}</div>
          </div>
          <div className="to-do-list__btns">
            <Btn onClickHandler={handleRemoveAllBtnClick}>clear all</Btn>
            <Btn mod="btn--secondary" onClickHandler={handleRemoveDoneBtnClick}>
              clear done
            </Btn>
          </div>
        </>
      ) : null}
    </div>
  )
}
