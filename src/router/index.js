import fetchPosts from '../API/fetchPosts'
import About from '../pages/About'
import Posts from '../pages/Posts'
import SinglePost from '../pages/_SinglePost'
import $URL from '../utils/$URL'

const getPostsPages = async () => {
  const posts = await fetchPosts()

  return posts.map(({ id, ...post }) => ({
    path: $URL(`post-card-${id}`),
    component: SinglePost,
    exaxt: true,
    meta: {
      id,
      ...post
    },
  }))
}

const routes = async () => {
  return [
    {
      path: '/about',
      component: About,
      exact: true,
    },
    {
      path: '/posts',
      component: Posts,
      exact: true,
    },
    ...(await getPostsPages()),
  ]
}

export default routes
