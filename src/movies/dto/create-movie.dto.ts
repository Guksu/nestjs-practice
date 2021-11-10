// DTO란 Data Transfer Object

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMoiveDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true }) //각각의 요소를 다 검사한다는 뜻
  readonly genres: string[];
}
