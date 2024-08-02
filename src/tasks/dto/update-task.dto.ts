import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class UpdateTaskDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}
