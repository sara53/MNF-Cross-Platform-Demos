import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/CounterReducer";
export const myStore = configureStore({
	reducer: {
		counterSlice: counterReducer,
	},
});
