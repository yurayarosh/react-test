import { useState, useMemo } from 'react'
import PostCard from '../PostCard/PostCard'
import classes from './PostsList.module.scss'

const PostsList = ({ list: allList } = {}) => {
  const [filterValue, setFilterValue] = useState('')

  const listFilteredMemo = useMemo(() => {
    return allList.filter(({ title }) => title.toUpperCase().includes(filterValue.toUpperCase()))
  }, [filterValue, allList])

  const onInput = e => {
    setFilterValue(e.target.value)
  }

  return (
    <>
      <input type="text" placeholder="Start typing here." onInput={onInput} />

      {listFilteredMemo.length > 0 ? (
        <ul className={classes.wrap}>
          {listFilteredMemo.map(({ id, title, body }) => (
            <li key={id} className={classes.item}>
              <PostCard url={`post-card-${id}`} title={title} text={body} id={id} />
            </li>
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default PostsList
