import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../../services/movieSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
