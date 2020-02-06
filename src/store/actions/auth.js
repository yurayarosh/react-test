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

      console.log({ isLogin }, data)
    } catch (error) {
      console.error(error)
    }
  }
}
