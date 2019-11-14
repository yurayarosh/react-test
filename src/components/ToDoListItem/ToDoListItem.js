import React from 'react'
import './ToDoListItem.sass'

export default function ToDoListItem(props) {
  const { index, title, list, className, update } = props
  function handleItemDeleteClick() {
    list.splice(index, 1)
    update({
      toDoListItems: list
    })    
  }

  function handleItemClick(e) {
    list[index].done = !list[index].done;
    const parent = e.target.parentNode
    parent.classList.toggle('is-done')

    update({
      toDoListItems: list
    })    
  }

  return(
    <div className={className || 'to-do-list-item'}>
      <div className="to-do-list-item__title" onClick={handleItemClick}>{title}</div>
      <button className="to-do-list-item__btn" onClick={handleItemDeleteClick}>x</button>
    </div>
  )
}