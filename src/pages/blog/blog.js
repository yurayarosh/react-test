import React from 'react'
import PostsList from '../../components/PostsList/PostsList'
import posts from '../../data/posts'

export default function Blog(props) {
  const { state, updateState } = props
  return (
    <PostsList
      list={state.posts}
      posts={[...posts]}
      postsShowNumber={state.postsShowNumber}
      update={updateState}
    />
  )
}
