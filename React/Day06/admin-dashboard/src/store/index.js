import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import userReducer from "./userSlice";
import { productReducer } from "./productSlice";

export const myStore = configureStore({
	reducer: {
		counterSlice: counterReducer,
		userSlice: userReducer,
		productSlice: productReducer,
	},
});
