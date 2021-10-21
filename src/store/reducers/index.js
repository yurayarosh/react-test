import { combineReducers } from 'redux'
import menuReducer from '../slices/menuSlice'

const rootReducer = combineReducers({
  menu: menuReducer,
})

export default rootReducer
