import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { GLOBAL_CONST } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  posSelected = 0;
  images = {
    logo: GLOBAL_CONST.FRONTEND_ASSETS + 'logo.png',
    user: GLOBAL_CONST.FRONTEND_ASSETS + 'profile_icon.png',
    cart: GLOBAL_CONST.FRONTEND_ASSETS + 'cart_icon.png',
    search: GLOBAL_CONST.FRONTEND_ASSETS + 'search_icon.png',
  };
  navbarContent = ['Home', 'Collection', 'About', 'Contact'];
  elementSelected(index: number) {
    this.posSelected = index;
  }
}
