import { CHANGE_INPUT, ADD_ITEM, COMPLETED_ITEM, SET_VISIBILITY } from './constants'

export const changeInput = value => ({
	type: CHANGE_INPUT,
	value
})

export const addItem = value => ({
	type: ADD_ITEM,
	value
})

export const completeItem = id => ({
	type: COMPLETED_ITEM,
	id
})

export const setVisibility = visible => ({
	type: 'SET_VISIBILITY',
	visible
})