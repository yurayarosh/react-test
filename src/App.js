import React, { Component } from 'react';
import posts from './data/posts'
import questions from './data/questions'
import './sass/app.sass'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation
} from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Blog from './pages/blog/blog'
import QuestionsTest from './pages/questions-test/questions-test'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      postsShowNumber: 2,
      posts: [...posts].slice(0, 2),
      toDoListItems: [],
      testQuestions: {
        current: 0,
        isFinished: false,
        list: questions
      }
    }
  }

  updateState(state) {
    this.setState(state)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/questions-test">
            <QuestionsTest
              state={this.state}
              updateState={this.updateState.bind(this)} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog
              state={this.state}
              updateState={this.updateState.bind(this)} />
          </Route>
          <Route path="/">
            <Home
              state={this.state}
              updateState={this.updateState.bind(this)} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
