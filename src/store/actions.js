import constants from './constants'

let nextId = 0

export const addItem = (value, done=false, visible=true, id=nextId++) => ({
	type: constants.ADD_ITEM,
	payload: {id, value, done, visible}
})

export const clearItem = i =>({
	type: constants.CLEAR_ITEM,
	payload: i
})

export const setDone = i => ({
	type: constants.COMPLETE_ITEM,
	payload: i
})

export const setVisible = i => ({
	type: constants.SET_VISIBLE,
	payload: i
})

export const setInvisible = i => ({
	type: constants.SET_INVISIBLE,
	payload: i
})