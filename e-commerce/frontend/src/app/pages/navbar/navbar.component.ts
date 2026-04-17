import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { GLOBAL_CONST } from '../../core/constant/Global.constant';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart/cart.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(
    private readonly router: Router,
    public cartService: CartService,
  ) {}
  posSelected = 0;
  images = {
    logo: GLOBAL_CONST.FRONTEND_ASSETS + 'logo.png',
    user: GLOBAL_CONST.FRONTEND_ASSETS + 'profile_icon.png',
    cart: GLOBAL_CONST.FRONTEND_ASSETS + 'cart_icon.png',
    search: GLOBAL_CONST.FRONTEND_ASSETS + 'search_icon.png',
  };
  navbarContent = [
    { name: 'Home', link: '' },
    { name: 'Collection', link: '/collections' },
    { name: 'About', link: '' },
    { name: 'Contact', link: '' },
  ];
  elementSelected(index: number, link: string) {
    this.router.navigate([link]);
    this.posSelected = index;
  }
  openCart() {
    this.router.navigate(['cart']);
  }
}
