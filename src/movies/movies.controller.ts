import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMoiveDto } from './dto/create-movie.dto';
import { UpdateMoiveDto } from './dto/update-moive.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() data: CreateMoiveDto) {
    return this.moviesService.create(data);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moviesService.remove(id);
  }

  // update
  @Patch('/:id')
  patch(@Param('id') id: number, @Body() data: UpdateMoiveDto) {
    return this.moviesService.patch(id, data);
  }
}
