import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/updateProductDto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { roles } from 'src/common/decorator/roles.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('createProduct')
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Patch('updateProduct/:id')
  updateProduct(@Param('id') id: string, @Body() product: UpdateProductDto) {
    return this.productService.updateProduct(id, product);
  }

  @Delete('deleteProduct/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @roles(['admin'])
  @UseGuards(AuthGuard)
  @Get('getAllProducts')
  getAllProducts() {
    return this.productService.getAllProducts();
  }
}
