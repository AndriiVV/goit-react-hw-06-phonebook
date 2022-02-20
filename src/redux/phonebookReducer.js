import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { itemAdd, itemDelete, phonebookFilter } from "./phonebookActions";

const KEY = "phonebook";

const getPhonebookFromLS = () => JSON.parse(localStorage.getItem(KEY)) || [];

const setPhonebookToLS = (phonebook) =>
	localStorage.setItem(KEY, JSON.stringify(phonebook));

const initialPhonebook = getPhonebookFromLS();

const itemsReducer = createReducer(initialPhonebook, {
	[itemAdd]: (state, { payload }) => {
		const phonebook = [...state, payload];
		setPhonebookToLS(phonebook);
		return phonebook;
	},
	[itemDelete]: (state, { payload }) => {
    const phonebook = state.filter((el) => el.id !== payload);
    setPhonebookToLS(phonebook);
		return phonebook;
	},
});

const filterReducer = createReducer("", {
	[phonebookFilter]: (_, { payload }) => {
		return payload;
	},
});

const phonebookReducer = combineReducers({
	items: itemsReducer,
	filter: filterReducer,
});

export default phonebookReducer;
