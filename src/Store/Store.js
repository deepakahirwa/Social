import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import UserSlice from "./AuthSlice";
const Store = configureStore({

    reducer: {
        posts: PostSlice,
        auth: UserSlice
    }
})

export default Store;