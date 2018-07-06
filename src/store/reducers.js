import constants from './constants'
import { combineReducers } from 'redux'

const input = (state='', action) => {
	switch(action.type) {
		case constants.CHANGE_INPUT:
			return action.value
		case constants.CLEAR_INPUT:
			return ''
		default:
			return ''
	}
}

const items = (state=[], action) => {
	switch(action.type) {
		case constants.ADD_ITEM:
			return [
				...state,
				chanegItem(null, action)
			]
		case constants.SET_VISIBLE:
			return state.map(item => chanegItem(item, action))
		case constants.SET_INVISIBLE:
			return state.map(item => chanegItem(item, action))
		case constants.COMPLETE_ITEM:
			return state.map(item => chanegItem(item, action))
		case constants.CLEAR_ITEM:
			return state.filter(item => item.id !== action.id)
		default:
			return state
	}
}

const chanegItem = (state={}, action) =>  {
	switch(action.type) {
		case constants.ADD_ITEM:
			return action.payload
		case constants.COMPLETE_ITEM:
			return action.id === state.id ? 
				{
					...state,
					done: !state.done
				} :
				state
		case constants.SET_VISIBLE:
			return action.id === state.id ? 
				{
					...state,
					visible: true
				} :
				state
		case constants.SET_INVISIBLE:
			return action.id === state.id ?
				{
					...state,
					visible: false
				} :
				state
		default:
			return state
	}
}

export default combineReducers({
	input,
	items,
	chanegItem
})