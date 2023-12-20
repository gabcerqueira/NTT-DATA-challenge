import { Movie } from "../../models/Movie";

const fetchMovie = async (_movie: string): Promise<Movie | undefined> => {
  try {
    const movie: Movie = {
      title: "",
    };

    return await new Promise((resolve) => resolve(movie));
  } catch (error) {}
};

export const MovieService = {
  fetchMovie,
};
