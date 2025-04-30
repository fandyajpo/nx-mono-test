import { IsOptional, IsString } from 'class-validator';

export class CreateCarDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type?: string;
}

export class CarEntity {
  name?: string;
  type?: string;
}
