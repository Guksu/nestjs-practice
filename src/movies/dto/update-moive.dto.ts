// DTO란 Data Transfer Object

import { PartialType } from '@nestjs/mapped-types';
import { CreateMoiveDto } from './create-movie.dto';

export class UpdateMoiveDto extends PartialType(CreateMoiveDto) {}
