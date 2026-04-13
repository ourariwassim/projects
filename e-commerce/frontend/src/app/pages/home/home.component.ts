import { Component } from '@angular/core';
import { GLOBAL_CONST } from '../../core/constant/Global.constant';
import { ItemCardComponent } from '../../shared/item-card/item-card.component';
import { PolicyComponent } from '../../shared/policy/policy.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-home',
  imports: [ItemCardComponent, PolicyComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  images = {
    hero: GLOBAL_CONST.FRONTEND_ASSETS + 'hero_img.png',
  };
  policies = [
    {
      title: 'Easy Exchange Policy',
      description: 'We offer hassle free exchange policy',
      image: GLOBAL_CONST.FRONTEND_ASSETS + 'exchange_icon.png',
    },
    {
      title: '7 Days Return Policy',
      description: 'We provide 7 days free return policy',
      image: GLOBAL_CONST.FRONTEND_ASSETS + 'quality_icon.png',
    },
    {
      title: 'Best customer support',
      description: 'We provide 24/7 customer support',
      image: GLOBAL_CONST.FRONTEND_ASSETS + 'support_img.png',
    },
  ];
}
