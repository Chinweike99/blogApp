import { configureStore, createSlice } from '@reduxjs/toolkit';

/**
 * toolkit: allows creation of redux toolkit.
 * the reducers functions (login, logout) contains the state of the redux.
 * store: Handles the state of the reducers
 */

const authSlice = createSlice({
    name: "auth",
    initialState: {isLoggedIn: false},
    reducers: {
        login(state){{
            state.isLoggedIn = true;
        }},

        logout(state){
            state.isLoggedIn = false;
        }
    }
});

export const authActions = authSlice.actions

export const store = configureStore({
    reducer: authSlice.reducer
})