import React from 'react';
import Layout from '../../layouts/Layout'
import ToDoList from '../../components/ToDoList/ToDoList'

export default function Home(props) {
  const { state, updateState } = props
  return (
    <Layout>
      <ToDoList
        list={state.toDoListItems}
        update={updateState} />      
    </Layout>
  )
}
