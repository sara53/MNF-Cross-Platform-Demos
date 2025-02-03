import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		increaseAction: (state, action) => {
			state.count += action.payload;
		},
		decreaseAction: (state, action) => {
			state.count -= action.payload;
		},
	}, //actions
});

export const { increaseAction, decreaseAction } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
