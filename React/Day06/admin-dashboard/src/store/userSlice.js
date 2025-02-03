import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: "ali", isLogin: false };

const userSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state, payload) => {
			state.isLogin = false;
		},
	},
});

const { logout } = userSlice.actions;
export default userSlice.reducer;
