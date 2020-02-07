import { AUTH_SUCCESS, AUTH_LOGOUT } from './actoinTypes'

export function auth({ email, password, isLogin }) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    }

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8PrbOkwP96acXoVuK7W-vyJl9F1QYwy8'

    if (isLogin)
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8PrbOkwP96acXoVuK7W-vyJl9F1QYwy8'

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(authData),
      })
      const data = await response.json()

      const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)

      localStorage.setItem('token', data.idToken)
      localStorage.setItem('expirationDate', expirationDate)
      localStorage.setItem('userId', data.localId)

      dispatch(authSuccess(data.idToken))
      dispatch(autoLogout(+data.expiresIn))

      console.log({ isLogin }, data)
    } catch (error) {
      console.error(error)
    }
  }
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token,
  }
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, time * 1000)
  }
}

export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('userId')
  return {
    type: AUTH_LOGOUT,
  }
}
