import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";


export const appSlice = createSlice({
	name: 'app',
	initialState: initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const {
	setIsLoading,
} = appSlice.actions;
