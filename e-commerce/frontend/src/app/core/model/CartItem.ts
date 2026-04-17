import { Product } from './Product';

export class CartIrem {
  product: Product;
  quantity: number;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
