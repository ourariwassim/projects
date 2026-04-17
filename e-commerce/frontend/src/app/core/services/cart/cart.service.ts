import { Injectable } from '@angular/core';
import { Cart } from '../../model/Cart';
import { Product } from '../../model/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getSize$ = new BehaviorSubject<number>(0);
  private cart = new Cart();

  constructor() {}
  addItem(product: Product, quantity: number) {
    this.cart.addItem(product, quantity);
    this.getSize$.next(this.cart.getSize());
  }
  removeItem(product: Product) {
    this.cart.removeItem(product);
  }
  getItems() {
    return this.cart.getItems();
  }
  updateQuantity(product: Product, quantity: number) {
    this.cart.updateQuantity(product, quantity);
    this.getSize$.next(Number(this.cart.getSize()));
  }
}
