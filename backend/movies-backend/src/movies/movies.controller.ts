import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':title')
  async findOne(@Param('title') title: string) {
    try {
      const movie = await this.moviesService.findMovieByTitle(title);
      const movieDto = new MovieDto(movie);

      return movieDto;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
