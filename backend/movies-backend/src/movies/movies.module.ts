import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { OMDbService } from 'src/shared/services/OMDb.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, OMDbService],
})
export class MoviesModule {}
