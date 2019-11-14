import React from 'react'
import Post from '../Post/Post'
import './PostList.sass'

export default function PostsList(props) {
  const { list, posts, update, postsShowNumber } = props
  const LOAD_MORE = list.length < posts.length

  function handleInputChange(e) {
    const value = e.target.value.toUpperCase()
    const filter = posts.filter(post => {
      return post.title.toUpperCase().indexOf(value) > -1
    })

    update({ posts: filter.slice(0, postsShowNumber) })
  }

  function setPostsDate() {
    list.forEach(post => {
      const date = post.date.split('.')
        .map(str => str.trim())
        .join('-')

      post.dateFormat = new Date(date)
    })
  }

  function handleSortByNewBtnClick() {
    setPostsDate()
    list
      .sort((a, b) => b.dateFormat - a.dateFormat)
    update({ posts: list })
  }

  function handleSortByOldClick() {
    setPostsDate()
    list
      .sort((a, b) => a.dateFormat - b.dateFormat)
    update({ posts: list })
  }

  function handleSortByNameClick() {
    list
      .sort((a, b) => a.title.localeCompare(b.title))
    update({ posts: list })
  }

  function handleLoadMoreClick() {
    const loadPostsNumber = 1
    const index = list.length + loadPostsNumber
    const updList = [...posts].slice(0, index)

    update({
      posts: updList,
      postsShowNumber: index
    })
  }

  return (
    <div className="posts">
      <div className="posts__search">
        <input className="input" type="text" onChange={handleInputChange} />
      </div>
      <div className="posts__btns">
        <button className="btn" onClick={handleSortByNewBtnClick}>new</button>
        <button className="btn" onClick={handleSortByOldClick}>old</button>
        <button className="btn" onClick={handleSortByNameClick}>name</button>
      </div>
      <div className="posts__posts">
        {
          list.map((post, i) =>
            <Post
              key={i}
              title={post.title}
              text={post.text}
              date={post.date}
              mod={post.mod} />
          )
        }
        {
          LOAD_MORE ?
            <div className="posts__btn">
              <button className="btn" onClick={handleLoadMoreClick}>load more</button>
            </div>
            : null
        }
      </div>
    </div>
  )
}