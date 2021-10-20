import { CLOSE_MENU, OPEN_MENU } from '../types'

const menu = (state = { isOpen: false }, { isOpen, type }) => {
  switch (type) {
    case OPEN_MENU:
      return [
        ...state,
        {
          isOpen: true,
        },
      ]
    case CLOSE_MENU:
      return [
        ...state,
        {
          isOpen: false,
        },
      ]
    default:
      return state
  }
}
export default menu
