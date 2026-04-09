import { isNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class createBlogDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  category: string;
  @IsString()
  @IsNotEmpty()
  content: string;
}
