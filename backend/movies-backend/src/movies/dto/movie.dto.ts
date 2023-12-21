import { Movie } from '../entities/movie.entity';

export class MovieDto {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  imdbRating: string;
  Plot: string;
  Actors: string[];

  constructor(movie: Movie) {
    this.Title = movie.Title;
    this.Year = movie.Year;
    this.imdbID = movie.imdbID;
    this.Type = movie.Type;
    this.Poster = movie.Poster;
    this.imdbRating = movie.imdbRating;
    this.Plot = movie.Plot;
    this.Actors = movie.Actors;
  }
}
