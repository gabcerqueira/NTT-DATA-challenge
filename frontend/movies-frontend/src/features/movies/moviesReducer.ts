import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../models/Movie";
import { fetchMovie } from "./moviesActions";

interface MoviesState {
  movie: Movie | null;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movie: null,
  loading: false,
  error: null,
};

export const moviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMovie.pending, (state) => ({
    ...state,
    loading: true,
  }));

  builder.addCase(fetchMovie.rejected, (state, action) => ({
    ...state,
    loading: false,
    error: action.error.message!,
  }));

  builder.addCase(fetchMovie.fulfilled, (state, action) => ({
    ...state,
    movie: action.payload!,
    loading: false,
  }));
});
