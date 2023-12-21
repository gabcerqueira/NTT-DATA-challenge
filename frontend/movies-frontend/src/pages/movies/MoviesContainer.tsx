import { useAppSelector } from "../../app/hooks";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import Movies from "./Movies";
import {
  selectLoadingMovies,
  selectMovie,
} from "../../features/movies/moviesSelectors";

type Props = {};

const Container = WithSpinner(Movies);
function MoviesContainer({}: Props) {
  const movie = useAppSelector(selectMovie);
  const isLoading = useAppSelector(selectLoadingMovies);

  return <Container movie={movie} isLoading={isLoading} />;
}

export default MoviesContainer;
