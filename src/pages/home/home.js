import React from 'react';
import ToDoList from '../../components/ToDoList/ToDoList'

export default function Home(props) {
  const { state, updateState } = props
  return (
    <ToDoList
      list={state.toDoListItems}
      update={updateState} />
  )
}
