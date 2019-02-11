import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	 } from "./constants.js";

export const setSearchField = (text) => ({
		type: "CHANGE_SEARCH_FIELD", // The action that gonna be taken
		payload: text //sending data to producer, data for updating state
});

export const requestRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch("https://api.jsonbin.io/b/5c614e84ad5128320af6cb16")
            .then(response => response.json())
            .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))

};