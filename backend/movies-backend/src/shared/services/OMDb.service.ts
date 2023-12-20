import { BadRequestException, Injectable } from '@nestjs/common';
import { ErrorMessages } from '../messages/ErrorMessages';
import { Movie } from 'src/movies/entities/movie.entity';
import axios, { AxiosResponse } from 'axios';
import { OMDbKey, OMDbUrl } from '../env';

@Injectable()
export class OMDbService {
  BASE_URL: string;

  constructor() {
    this.BASE_URL = `${OMDbUrl}/?apikey=${OMDbKey}&`;
  }

  async fetchMovieByTitle(title: string): Promise<Movie> {
    try {
      const movie = await axios.request({
        url: this.BASE_URL + `t=${title}`,
        method: 'GET',
      });

      if (movie.data.Error) throw new Error(movie.data.Error);
      return movie.data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
