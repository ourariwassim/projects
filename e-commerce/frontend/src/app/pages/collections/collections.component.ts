import { Component } from '@angular/core';
import { FiltersComponent } from '../../shared/filters/filters.component';
import { ItemCardComponent } from '../../shared/item-card/item-card.component';
import { items } from '../../core/constant/items';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-collections',
  imports: [FiltersComponent, ItemCardComponent, ButtonComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css',
})
export class CollectionsComponent {
  constructor(private readonly router: Router) {}
  allCollections = items;
  categories: string[] = [];
  types: string[] = [];
  items = this.allCollections;
  sort = '';
  applyFilter() {
    console.log(this.types);
    let result = this.allCollections.filter((item) => {
      const filter1 =
        this.categories.length == 0 || this.categories.includes(item.category);
      const filter2 =
        this.types.length == 0 || this.types.includes(item.subCategory);

      return filter1 && filter2;
    });
    if (this.sort == 'low') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (this.sort == 'high') {
      result = result.sort((a, b) => b.price - a.price);
    }
    this.items = result;
  }
  filterByCategories(event: string) {
    if (this.categories.includes(event)) {
      this.categories = this.categories.filter((c) => c != event);
    } else {
      this.categories.push(event);
    }
    this.applyFilter();
  }
  filterByType(event: string) {
    if (this.types.includes(event)) {
      this.types = this.types.filter((c) => c != event);
    } else {
      this.types.push(event);
    }
    this.applyFilter();
  }
  sortItems(value: string) {
    this.sort = value;
    if (this.sort == 'low') {
      this.items = this.items.sort((a, b) => a.price - b.price);
    } else if (this.sort == 'high') {
      this.items = this.items.sort((a, b) => b.price - a.price);
    } else {
      this.items = this.allCollections;
      this.applyFilter();
    }
  }
  nevigateToShowCase(id: string) {
    this.router.navigate(['item/' + id]);
  }
}
