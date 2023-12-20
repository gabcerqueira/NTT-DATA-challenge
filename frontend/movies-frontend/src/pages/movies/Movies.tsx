import { Movie } from "../../models/Movie";

type Props = {
  movie: Movie | null;
};

function Movies({ movie }: Props) {
  return <div>Movies</div>;
}

export default Movies;
