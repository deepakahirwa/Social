import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import UserSlice from "./UserSlice";
const Store = configureStore({

    reducer: {
        posts: PostSlice.reducer,
        users: UserSlice.reducer
    }
})

export default Store;