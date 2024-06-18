import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    editMovie: (state, action) => {
      const { id, updatedMovie } = action.payload;
      const index = state.movies.findIndex(movie => movie.id === id);
      if (index !== -1) {
        state.movies[index] = { ...state.movies[index], ...updatedMovie };
      }
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
    toggleWatched: (state, action) => {
      const movie = state.movies.find(movie => movie.id === action.payload);
      if (movie) {
        movie.watched = !movie.watched;
      }
    },
    rateMovie: (state, action) => {
      const { id, rating } = action.payload;
      const movie = state.movies.find(movie => movie.id === id);
      if (movie) {
        movie.rating = rating;
      }
    },
    reviewMovie: (state, action) => {
      const { id, review } = action.payload;
      const movie = state.movies.find(movie => movie.id === id);
      if (movie) {
        movie.review = review;
      }
    },
  },
});

export const {
  addMovie, editMovie, deleteMovie, toggleWatched, rateMovie, reviewMovie,
} = moviesSlice.actions;

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export default store;
