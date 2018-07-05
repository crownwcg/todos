import { CHANGE_INPUT, ADD_ITEM, COMPLETED_ITEM, SET_VISIBILITY } from './constants'

const initialState = {
	inputValue: ''
}

export const changeInput = (state = initialState, action = {}) => {
	switch(action.type) {
		case  CHANGE_INPUT :
			return Object.assign({}, state, {
				inputValue: action.value
			})
		default:
			return state
	}
}

// export const addItem = (state = initialState, action = {}) => {
// 	switch(action.type) {
// 		case ADD_ITEM:
// 			return {...state, {
// 				value: action.value,
// 				done: false,
// 				visible: true
// 			}}
// 	}
// }