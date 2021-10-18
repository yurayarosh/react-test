import { useEffect, useState } from 'react'
import fetchPosts from '../API/fetchPosts'
import PostsList from '../components/PostsList/PostsList'

const Posts = () => {
  const [posts, setPosts] = useState([])

  // const fetchPosts = async () => {
  //   const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   return await postsRes.json()
  // }

  useEffect(() => {
    ;(async () => {
      const p = await fetchPosts()
      setPosts(p)
    })()
  }, [])

  return (
    <div className="container">
      <PostsList list={posts} />
    </div>
  )
}

export default Posts
