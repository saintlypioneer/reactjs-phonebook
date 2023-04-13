import { createSlice } from "@reduxjs/toolkit";

const phonebookSlice = createSlice({
    name: "phonebook",
    initialState: {
        contacts: [],
        bookmarks: [],
        filter: "",
        search: "",
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
            state.contacts.sort((a, b) => a.name.localeCompare(b.name));
        },
        editContact: (state, action) => {
            const index = state.contacts.findIndex(
                (contact) => contact.id === action.payload.id
            );
            state.contacts[index] = action.payload;
            state.contacts.sort((a, b) => a.name.localeCompare(b.name));
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(
                (contact) => contact.id !== action.payload
            );
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        toggleBookmark: (state, action) => {
            const contactId = action.payload;
            const index = state.bookmarks.indexOf(contactId);

            if (index === -1) {
                state.bookmarks.push(contactId);
            } else {
                state.bookmarks.splice(index, 1);
            }
        },
    },
});

export const {
    addContact,
    editContact,
    deleteContact,
    setSearch,
    setFilter,
    toggleBookmark,
} = phonebookSlice.actions;

export default phonebookSlice.reducer;