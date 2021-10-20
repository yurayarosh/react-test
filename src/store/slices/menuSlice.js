import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen
    },
    open(state) {
      state.isOpen = true
    },
    close(state) {
      state.isOpen = false
    },
  },
})

export const { toggle, open, close } = menuSlice.actions

export default menuSlice.reducer
