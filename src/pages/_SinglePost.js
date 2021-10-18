function SinglePost({ meta }) {
  return (
    <>
      <h1>{meta.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: meta.body }}></div>
    </>
  )
}

export default SinglePost
