import { CHANGE_SEARCH_FIELD } from "./constants.js";

const initialState = {
	searchField: ""
}

export const searchRobots = (state=initialState, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD: 
			return Object.assign({}, state, {searchField: action.payload}); 
		//{} is a new obj, we merge it with state(initial state) and searchField
		//which is from constant.js
		default:
			return state;
	}
}