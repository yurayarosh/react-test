// import { createStore } from 'redux'
// import rootReducer from './reducers'

// const store = createStore(rootReducer)

// export default store

import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
})
