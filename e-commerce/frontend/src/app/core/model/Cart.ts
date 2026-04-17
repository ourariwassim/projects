import { BehaviorSubject } from 'rxjs';
import { CartIrem } from './CartItem';
import { Product } from './Product';

export class Cart {
  cartItem: CartIrem[] = [];

  addItem(product: Product, quantity = 1) {
    const exist = this.cartItem.find(
      (item) =>
        item.product._id == product._id && item.product.size == product.size,
    );
    if (exist) {
      exist.quantity += 1;
    } else {
      this.cartItem.push(new CartIrem(product, 1));
    }
  }
  removeItem(product: Product) {
    this.cartItem = this.cartItem.filter(
      (item) =>
        !(item.product.size == product.size && item.product._id == product._id),
    );
  }
  updateQuantity(product: Product, quantity: number) {
    const exist = this.cartItem.find(
      (item) =>
        item.product._id == product._id && item.product.size == product.size,
    );
    if (exist) {
      exist.quantity = quantity;
    }
  }
  getItems() {
    return this.cartItem;
  }
  getSize() {
    let s = 0;
    for (const i of this.cartItem) {
      s += Number(i.quantity);
    }
    return s;
  }
}
