import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../models/Movie";
import {
  addFavorite,
  clearMovie,
  fetchMovie,
  removeFavorite,
} from "./moviesActions";

interface MoviesState {
  movie: Movie | null;
  loading: boolean;
  error: string | null;
  favoriteMovies: Movie[];
}

const initialState: MoviesState = {
  movie: null,
  loading: false,
  error: null,
  favoriteMovies: [],
};

export const moviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMovie.pending, (state) => ({
    ...state,
    loading: true,
    error: null,
  }));

  builder.addCase(fetchMovie.rejected, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.message!,
    movie: null,
  }));

  builder.addCase(fetchMovie.fulfilled, (state, action) => ({
    ...state,
    movie: action.payload!,
    loading: false,
  }));
  builder.addCase(clearMovie, (state) => ({
    ...state,
    movie: null,
  }));
  builder.addCase(addFavorite, (state, action) => ({
    ...state,
    favoriteMovies: [...state.favoriteMovies, action.payload],
  }));

  builder.addCase(removeFavorite, (state, action) => ({
    ...state,
    favoriteMovies: state.favoriteMovies.filter(
      (movie) => movie.Title !== action.payload.Title
    ),
  }));
});
