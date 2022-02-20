import { configureStore } from "@reduxjs/toolkit";

import phonebookReducer from "./phonebookReducer";

const store = configureStore({
	reducer: {
		phonebook: phonebookReducer,
	},
});

export default store;
