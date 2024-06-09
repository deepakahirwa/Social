import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo: null,
    IsloggedIn: false,
    UserPost: null

}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload.UserData;
            state.UserPost = action.payload.UserPost;
            state.IsloggedIn = true;
        },
        logout: (state, action) => {
            state.userInfo = null;
            state.IsloggedIn = false;
            state.UserPost = null;
        }
    }
})

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
