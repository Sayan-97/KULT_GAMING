import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    authState: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleState: (state, action) => {
            state.authState = action.payload
        },
    }
})

const selectAuthState = state => state.auth.authState;

export const getAuthState = createSelector(
    selectAuthState,
    (authState) => {
        return authState ? "Authenticated" : "Not Authenticated";
    }
);

export const { toggleState } = authSlice.actions;

export default authSlice.reducer;