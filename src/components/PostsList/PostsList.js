import React from 'react'
import Post from '../Post/Post'
import './PostList.sass'

export default function PostsList({ list, posts, update }) {
  function filterPosts(e) {
    const value = e.target.value.toUpperCase()  
    const filter = posts.filter(post => {
      return post.title.toUpperCase().indexOf(value) > -1
    })

    update({ posts: filter })
  }

  function setPostsDate() {
    list.forEach(post => {
      const date = post.date.split('.')
        .map(str => str.trim())
        .join('-')

        post.dateFormat = new Date(date)
    })
  }

  function sortNewestFirst(e) {
    setPostsDate()
    list
      .sort((a, b) => b.dateFormat - a.dateFormat)
    update({ posts: list })
  }

  function sortOldestFirst(e) {
    setPostsDate()
    list
      .sort((a, b) => a.dateFormat - b.dateFormat)
    update({ posts: list })
  }

  function sortByName(e) {
    list
      .sort((a, b) => a.title.localeCompare(b.title))
    update({ posts: list })
  }

  return(
    <div className="posts">
      <div className="posts__search">
        <input className="input" type="text" onChange={filterPosts} />
      </div>
      <div className="posts__btns">
        <button className="btn" onClick={sortNewestFirst}>new</button>
        <button className="btn" onClick={sortOldestFirst}>old</button>
        <button className="btn" onClick={sortByName}>name</button>
      </div>
      <div className="posts__posts">
        {
          list.map((post, i) =>
            <Post
              key={i}
              title={post.title}
              text={post.text}
              date={post.date}
              mod={post.mod}/>
          )        
        }
      </div>
    </div>
  )
}