import React, { Component } from 'react';
import PostsList from './components/PostsList/PostsList'
import ToDoList from './components/ToDoList/ToDoList'
import posts from './data/posts'
import './sass/app.sass'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postsShowNumber: 2,
      posts: [...posts].slice(0, 2),
      toDoListItems: []
    }

  }

  updateState(state) {
    this.setState({ ...this.state, ...state })
  }

  render() {
    return (
      <div className="app">
        <ToDoList
          list={this.state.toDoListItems}
          update={this.updateState.bind(this)} />

        <PostsList
          list={this.state.posts}
          posts={[...posts]}
          postsShowNumber={this.state.postsShowNumber}
          update={this.updateState.bind(this)} />
      </div>
    );
  }
}

export default App;
