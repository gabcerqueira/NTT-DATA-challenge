import { RootState } from "../../app/store";

export const selectLoadingMovies = (state: RootState) => state.movies.loading;
export const selectMovie = (state: RootState) => state.movies.movie;
export const selectMoviesError = (state: RootState) => state.movies.error;
