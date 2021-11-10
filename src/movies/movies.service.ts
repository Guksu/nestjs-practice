import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMoiveDto } from './dto/create-movie.dto';
import { UpdateMoiveDto } from './dto/update-moive.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private moives: Movie[] = [];

  getAll(): Movie[] {
    return this.moives;
  }

  getOne(id: number): Movie {
    const movie = this.moives.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  remove(id: number): boolean {
    this.getOne(id);
    this.moives = this.moives.filter((movie) => movie.id !== id);
    return true;
  }

  create(data: CreateMoiveDto): void {
    this.moives.push({
      id: this.moives.length + 1,
      ...data,
    });
  }

  patch(id: number, data: UpdateMoiveDto) {
    const movie = this.getOne(id);
    this.remove(id);
    this.moives.push({ ...movie, ...data });
  }
}
