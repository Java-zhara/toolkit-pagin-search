import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import {AppDispatch} from './../store'

// import {postSlice} from './PostSlice'

import type { IPost } from '../types/IPost';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(postSlice.actions.usersFetching())
//     const response = await axios.get<IPost[]>(
//       'https://jsonplaceholder.typicode.com/posts'
//     )
//     dispatch(postSlice.actions.usersFetchingSuccess(response.data))
//   } catch (error: any) {
//     dispatch(postSlice.actions.usersFetchingError(error.message))
//   }
// }

export const fetchPosts = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить посты');
  }
});
