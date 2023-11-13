
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IMoviesState } from '../types/movie';



const API_KEY = '962e68682fmsh54fee539a15db77p178533jsn486809cef2f5';
const API_HOST = 'imdb8.p.rapidapi.com';


export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchQuery) => {
  try {
    const response = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchQuery}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    });

    const data = await response.json();
    console.log(data)
    return data.d;
  } catch (error) {
    throw new Error('Error fetching movies');
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  } as IMoviesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Error fetching movies';
      });
  },
});

export default moviesSlice.reducer;
