import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Posts: null,
}

const PostSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        fetchFeed: (state, action) => {

            state.UserPost = action.payload.FeedPost;

        },
        removeFeed: (state, action) => {

            state.FeedPost = null;
        }
    }
})

export const { fetchFeed, removeFeed } = PostSlice.actions;

export default PostSlice.reducer;
