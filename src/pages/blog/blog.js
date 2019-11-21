import React from 'react'
import Layout from '../../layouts/Layout'
import PostsList from '../../components/PostsList/PostsList'
import posts from '../../data/posts'

export default function Blog(props) {
  const { state, updateState } = props
  return(
    <Layout>
      <PostsList
        list={state.posts}
        posts={[...posts]}
        postsShowNumber={state.postsShowNumber}
        update={updateState} />
    </Layout>
  )
}