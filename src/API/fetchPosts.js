const fetchPosts = async () => {
  const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await postsRes.json()
}

export default fetchPosts
