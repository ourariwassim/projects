import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNumber()
  price: number;
  @IsString()
  @IsNotEmpty()
  category: string;
  @IsString()
  @IsNotEmpty()
  subCategory: string;
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  sizes: string[];
  @IsBoolean()
  bestseller: boolean;
  @IsNumber()
  stock: number;
}
