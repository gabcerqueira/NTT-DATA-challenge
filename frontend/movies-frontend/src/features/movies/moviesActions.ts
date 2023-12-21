import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../models/Movie";
import { MovieService } from "./moviesService";

export const fetchMovie = createAsyncThunk<
  Movie | undefined,
  string,
  { rejectValue: string }
>("movies/fetchMovie", MovieService.fetchMovie);

export const clearMovie = createAction("movies/clearMovie");

export const addFavorite = createAction<Movie>("movies/addFavorite");

export const removeFavorite = createAction<Movie>("movies/removeFavorite");
