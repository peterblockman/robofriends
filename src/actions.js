import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	 } from "./constants.js";

export const setSearchField = (text) => ({
		type: "CHANGE_SEARCH_FIELD", // The action that gonna be taken
		payload: text //sending data to producer
});

export const requestRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch("http://www.json-generator.com/api/json/get/bVwMvcNtwy?indent=2")
            .then(response => response.json())
            .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))

};