import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { menuSlice } from '../../store/slices/menuSlice'
import classes from './Menu.module.scss'

function Menu() {
  const dispatch = useDispatch()

  const onKeyUp = ({ code }) => {
    if (code === 'Escape') dispatch(menuSlice.actions.close())
  }

  const onCloseButtonClick = () => {
    dispatch(menuSlice.actions.close())
  }

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp)

    return () => {
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return (
    <div className={classes.menu}>
      <button onClick={onCloseButtonClick} className={classes.close}>
        x
      </button>
      <div className={classes.inner}>this is menu inner</div>
    </div>
  )
}

export default Menu
