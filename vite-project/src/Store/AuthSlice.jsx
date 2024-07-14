import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    UserInfo: null,
    IsloggedIn: false,
    UserPost: null

}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.UserInfo = action.payload.UserData;
            state.UserPost = action.payload.UserPost;
            console.log(state.UserPost);
            state.IsloggedIn = true;

        },
        logout: (state, action) => {
            state.UserInfo = null;
            state.IsloggedIn = false;
            state.UserPost = null;
        }
    }
})

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
