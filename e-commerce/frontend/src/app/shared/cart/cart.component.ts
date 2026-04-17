import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { Cart } from '../../core/model/Cart';
import { CartIrem } from '../../core/model/CartItem';
import { GLOBAL_CONST } from '../../core/constant/Global.constant';
import { ButtonComponent } from '../button/button.component';
import { Product } from '../../core/model/Product';

@Component({
  selector: 'app-cart',
  imports: [ButtonComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private readonly cartService: CartService) {}
  cart: CartIrem[] = [];
  ngOnInit() {
    this.cart = this.cartService.getItems();
    console.log(this.cart);
  }
  images = {
    bin: GLOBAL_CONST.FRONTEND_ASSETS + 'bin_icon.png',
  };
  updateQuantity(item: CartIrem, quantity: string) {
    const nQuantity = Number(quantity);
    if (nQuantity > 0) {
      this.cartService.updateQuantity(item.product, nQuantity);
    }
  }
  removeItem(item: CartIrem) {
    this.cartService.removeItem(item.product);
    this.cart = this.cartService.getItems();
  }
}
