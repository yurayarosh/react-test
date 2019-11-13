import React from 'react'
import './ToDoListItem.sass'

export default function ToDoListItem(props) {
  const { index, title, list, className, update } = props
  function deleteToDoItem() {
    list.splice(index, 1)
    update({
      toDoListItems: list
    })    
  }

  function toggleItemState(e) {
    list[index].done = !list[index].done;
    const parent = e.target.parentNode
    parent.classList.toggle('is-done')
  }

  return(
    <div className={className || 'to-do-list-item'}>
      <div className="to-do-list-item__title" onClick={toggleItemState}>{title}</div>
      <button className="to-do-list-item__btn" onClick={deleteToDoItem}>x</button>
    </div>
  )
}