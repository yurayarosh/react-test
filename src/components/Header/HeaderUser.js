import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './HeaderUser.sass'
import { logout } from '../../store/actions/auth'
import { Link } from 'react-router-dom'

function HeaderUser(props) {
  useEffect(() => {
    console.log(props)
  })
  const { mod } = props

  const cls = ['header-user']
  let image = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
  if (mod) cls.push(mod)
  if (props.isAuthenticated) image = 'https://randomuser.me/api/portraits/women/44.jpg'

  return (
    <div className={cls.join(' ')}>
      <div
        className="header-user__img"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {props.isAuthenticated ? (
        <>
          <a href="#" className="header-user__title">
            John Doe
          </a>
          <button className="header-user__title" onClick={props.logout}>
            logout
          </button>
        </>
      ) : (
        <Link to="auth" className="header-user__title">Login</Link>
      )}
    </div>
  )
}

function mapStateToProps() {
  return {
    isAuthenticated: !!localStorage.token,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUser)
