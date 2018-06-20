import { CHANGE_SEARCH_FIELD } from "./constants.js";

export const setSearchField = (text) => ({
		type: "CHANGE_SEARCH_FIELD", // The action that gonna be taken
		payload: text //sending data to producer
});