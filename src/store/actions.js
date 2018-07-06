import constants from './constants'

let nextId = 0

export const addItem = (value, done=false, visible=true, id=nextId++) => ({
  type: constants.ADD_ITEM,
  payload: {id, value, done, visible}
})

export const clearItem = id =>({
  type: constants.CLEAR_ITEM,
  id
})

export const setDone = id => ({
  type: constants.COMPLETE_ITEM,
  id
})

export const setVisible = id => ({
  type: constants.SET_VISIBLE,
  id
})

export const setInvisible = id => ({
  type: constants.SET_INVISIBLE,
  id
})

export const changeInput = value => ({
  type: constants.CHANGE_INPUT,
  value
})

export const clearInput = () => ({
  type: constants.CLEAR_INPUT,
})