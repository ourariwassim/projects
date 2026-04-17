import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/updateProductDto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRep: Repository<Product>,
  ) {}

  createProduct(product: CreateProductDto) {
    const newProduct = this.productRep.create(product);
    return this.productRep.save(newProduct);
  }
  updateProduct(id: string, product: UpdateProductDto) {
    return this.productRep.update(id, product);
  }

  deleteProduct(id: string) {
    return this.productRep.delete(id);
  }
  getAllProducts() {
    return this.productRep.find();
  }

  getProductById(id: string) {
    return this.productRep.findOneBy({ id });
  }
}
