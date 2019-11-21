import React, { Component } from 'react';
import posts from './data/posts'
import './sass/app.sass'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Blog from './pages/blog/blog'

const AnimationApp = (props) => {
  const location = useLocation()
  const { state, updateState } = props

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog
              state={state}
              updateState={updateState} />
          </Route>
          <Route path="/">
            <Home
              state={state}
              updateState={updateState} />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

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
      <Router>
        {/* <AnimationApp
          state={this.state}
          updateState={this.updateState.bind(this)}/> */}
        <Switch>
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
