import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const itemAdd = createAction("phonebook/add", (newContact) => {
	// console.log("phonebookAdd action is running...", {
	// 	...newContact,
	// 	id: nanoid(),
	// });

	return {
		payload: { ...newContact, id: nanoid() },
	};
});

export const itemDelete = createAction("phonebook/delete");

export const phonebookFilter = createAction(
	"phonebook/filter/update",
	(event) => {
		return { payload: event.target.value };
	}
);
