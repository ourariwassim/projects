import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ItemShowCaseComponent } from './shared/item-show-case/item-show-case.component';
import { CartComponent } from './shared/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'collections',
    component: CollectionsComponent,
  },
  {
    path: 'item/:id',
    component: ItemShowCaseComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
