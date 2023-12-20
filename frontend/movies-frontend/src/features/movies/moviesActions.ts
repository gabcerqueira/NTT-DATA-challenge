import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../models/Movie";
import { MovieService } from "./moviesService";

export const fetchMovie = createAsyncThunk<Movie | undefined, string>(
  "movies/fetchMovie",
  MovieService.fetchMovie
);
