import { useEffect, useState } from "react";
import MButton from "../../components/button/Button";

import MTextField from "../../components/textField/TextField";
import { Movie } from "../../models/Movie";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addFavorite,
  clearMovie,
  fetchMovie,
  removeFavorite,
} from "../../features/movies/moviesActions";
import MRating from "../../components/rating/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  selectFavoriteMovies,
  selectMoviesError,
} from "../../features/movies/moviesSelectors";
import { Alert, AlertTitle } from "@mui/material";
type Props = {
  movie: Movie | null;
};

function Movies({ movie }: Props) {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const favoritedMovies = useAppSelector(selectFavoriteMovies);
  const error = useAppSelector(selectMoviesError);

  useEffect(() => {}, [error]);

  const handleReset = () => {
    setSearch("");
    dispatch(clearMovie());
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchMovie(search));
  };

  const handleFavorite = (movie: Movie, action: "add" | "remove") => {
    if (action === "add" && !favoritedMovies.includes(movie)) {
      dispatch(addFavorite(movie));
    } else if (action === "remove" && favoritedMovies.includes(movie)) {
      dispatch(removeFavorite(movie));
    }
  };

  return (
    <div className="appContainer">
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error fetching the movie, try again !
        </Alert>
      )}
      <main>
        <div className="search-container ">
          <h2>Movies</h2>
          <p>
            Explore a vast collection of movies right at your fingertips!
            Effortlessly search and discover your favorite films with our
            user-friendly site search feature.
          </p>
          <div className="search-fields-container">
            <MTextField
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
            <MButton
              title="Search"
              variant="contained"
              onClick={handleSearch}
            />
            <MButton
              title="Reset"
              variant="contained"
              onClick={() => handleReset()}
            />
          </div>
        </div>
        <div className="content">
          {movie ? (
            <div className="movie-container">
              <div>
                <h3>{movie.Title}</h3>
                <p>{movie.Plot}</p>
                <p>
                  <label>
                    <strong>Actors: </strong>
                  </label>
                  <span>{movie.Actors}</span>
                </p>
                <p>
                  <label>Review : </label>
                  <MRating value={parseInt(movie.imdbRating)} />
                </p>
                {
                  <MButton
                    title="Favorite"
                    variant="contained"
                    onClick={() =>
                      handleFavorite(
                        movie,
                        favoritedMovies.includes(movie) ? "remove" : "add"
                      )
                    }
                    icon={
                      favoritedMovies.filter((el) => el.Title === movie.Title)
                        .length > 0 ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )
                    }
                  />
                }
              </div>
              <div>
                <img src={movie.Poster} alt="" />
              </div>
            </div>
          ) : (
            <div>
              <h3>Please search a movie</h3>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Movies;
