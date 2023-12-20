import { BadRequestException, Injectable } from '@nestjs/common';

import { OMDbService } from 'src/shared/services/OMDb.service';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(private readonly OMDbService: OMDbService) {}

  async findMovieByTitle(title: string) {
    try {
      return await this.OMDbService.fetchMovieByTitle(title);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
