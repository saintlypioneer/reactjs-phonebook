import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./reducer";

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});
export {store};