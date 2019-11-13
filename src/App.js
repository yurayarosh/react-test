import React, {Component} from 'react';
import PostsList from './components/PostsList/PostsList'
import ToDoList from './components/ToDoList/ToDoList'
import './sass/app.sass'

class App extends Component {
  constructor(props) {
    super(props)
    this.allPosts = [
      {
        title: 'Заголовок кирилицей',
        date: '01. 25. 19',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis neque autem facere voluptate doloremque expedita, repellendus ipsum cupiditate? Recusandae hic error nesciunt dolores magni perferendis voluptates, iste quos officia.'
      },
      {
        title: 'Second post',
        date: '05.12. 18',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis neque autem facere voluptate doloremque expedita, repellendus ipsum cupiditate? Recusandae hic error nesciunt dolores magni perferendis voluptates, iste quos officia.'
      },
      {
        title: 'Second different post',
        date: '11.01.18',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis neque autem facere voluptate doloremque expedita, repellendus ipsum cupiditate? Recusandae hic error nesciunt dolores magni perferendis voluptates, iste quos officia.'
      },
      {
        title: 'Тут звголовок тоже кирилицей',
        date: '08.19.18',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis neque autem facere voluptate doloremque expedita, repellendus ipsum cupiditate? Recusandae hic error nesciunt dolores magni perferendis voluptates, iste quos officia.'
      }
    ]
    this.state = {
      posts: [...this.allPosts],
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
          update={this.updateState.bind(this)}
        />

        <PostsList
          list={this.state.posts}
          posts={this.allPosts}
          update={this.updateState.bind(this)}/>
      </div>
    );
  }  
}

export default App;
