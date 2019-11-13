import React from 'react'
import ToDoListItem from '../ToDoListItem/ToDoListItem'
import './ToDoList.sass'

export default function ToDoList({ list, update }) {
  function addToDoItem(e) {
    e.preventDefault()
    const input = e.target.querySelector('input')
    const value = input.value

    if (value.length < 1) {
      alert('You must write something!')
      return
    }

    const itemState = {
      title: value,
      done: false
    }

    const updList = [...list, itemState]

    update({
      toDoListItems: updList
    })
    input.value = ''
    input.focus()
  }

  function removeAllItems() {
    update({
      toDoListItems: []
    })
  }

  function removeDoneItems(e) {
    const filter = list.filter(item => !item.done)

    update({
      toDoListItems: filter
    })

    const wrap = e.target.closest('.to-do-list')
    const listItems = [...wrap.querySelectorAll('.to-do-list-item')]

    listItems.forEach(item => {
      item.classList.remove('is-done')
    })
  }

  return (
    <div className="to-do-list">
      <div className="to-do-list__input">
        <form action="" onSubmit={addToDoItem}>
          <input className="input" type="text" />
          <button className="btn">add</button>
        </form>
      </div>

      <div className="to-do-list__list">
        {
          list.map((item, i) => {
            return (
              <ToDoListItem
                key={i}
                className={item.done ? 'to-do-list-item is-done' : 'to-do-list-item'}
                index={i}
                title={item.title}
                list={list}
                update={update} />
            )
          })
        }
      </div>

      {
        list.length > 0 ?
          <div className="to-do-list__btns">
            <button className="btn" onClick={removeAllItems}>clear all</button>
            <button className="btn" onClick={removeDoneItems}>clear done</button>
          </div>
          : null
      }
    </div>
  )
}