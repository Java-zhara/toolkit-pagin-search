import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IPost } from "../types/IPost";
// import { fetchPosts } from "./ActionCreators";

interface UserState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postsFetching(state) {
      state.isLoading = true;
    },
    postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    postsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
  //     state.isLoading = false;
  //     state.error = "";
  //     state.posts = action.payload;
  //   },
  //   [fetchPosts.pending.type]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

// export const postReducer = postSlice.reducer;
// export default postSlice.reducer

export const { postsFetching, postsFetchingSuccess, postsFetchingError } =
  postSlice.actions;

export default postSlice.reducer;
