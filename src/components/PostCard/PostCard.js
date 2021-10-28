import { Link } from 'react-router-dom'
import $URL from '../../utils/$URL'

const PostCard = ({ url, title, text, id } = {}) => {
  return (
    <Link className="post-card" to={$URL(url)}>
      <p className="post-card__id">{id}.</p>
      <h4 className="post-card__title">{title}</h4>
      <div className="post-card__text" dangerouslySetInnerHTML={{ __html: text }} />
    </Link>
  )
}

export default PostCard
