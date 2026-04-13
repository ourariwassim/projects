import { Component } from '@angular/core';
import { GLOBAL_CONST } from '../../core/constant/Global.constant';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-footer',
  imports: [ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  images = {
    logo: GLOBAL_CONST.FRONTEND_ASSETS + 'logo.png',
  };
  companyFooter = ['Home', 'About us', 'Delivery', 'Privacy Policy'];
  contact = ['92369062', 'contact@gmail.com'];
}
