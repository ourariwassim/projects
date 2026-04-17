import { Component } from '@angular/core';
import { items } from '../../core/constant/items';
import { GLOBAL_CONST } from '../../core/constant/Global.constant';
import { ButtonComponent } from '../button/button.component';
import { CartService } from '../../core/services/cart/cart.service';
import { Product } from '../../core/model/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-show-case',
  imports: [ButtonComponent],
  templateUrl: './item-show-case.component.html',
  styleUrl: './item-show-case.component.css',
})
export class ItemShowCaseComponent {
  imageToShow: string | undefined = '';
  item!: {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean;
    stars: number;
    people: number;
  };
  constructor(
    private readonly cartService: CartService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit() {
    const foundItem = items.find(
      (item) => item._id == this.activatedRoute.snapshot.paramMap.get('id'),
    );

    if (!foundItem) {
      console.error('Item not found');
      return;
    }

    this.item = foundItem;
    this.imageToShow = foundItem.image[0];
  }
  sizes = ['S', 'MD', 'L', 'XL', 'XXL'];
  selectedSizes: string[] = [];
  starsArray = [1, 2, 3, 4, 5];

  images = {
    starFull: GLOBAL_CONST.FRONTEND_ASSETS + 'star_icon.png',
    starDull: GLOBAL_CONST.FRONTEND_ASSETS + 'star_dull_icon.png',
  };

  changeImage(image: string) {
    this.imageToShow = image;
  }
  checkSelected(size: string) {
    return this.selectedSizes.includes(size);
  }
  toggleSize(size: string) {
    if (this.selectedSizes.includes(size)) {
      this.selectedSizes = this.selectedSizes.filter((s) => s != size);
      return;
    } else if (this.selectedSizes.length != 0) {
      this.selectedSizes.pop();
    }
    this.selectedSizes.push(size);
  }
  addToCart(item: Product) {
    if (this.selectedSizes.length != 0) {
      this.cartService.addItem({ ...item, size: this.selectedSizes[0] }, 1);
    }
  }
}
