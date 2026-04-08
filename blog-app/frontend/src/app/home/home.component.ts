import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, NgClass, CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories = ['All', 'Technology', 'Startup', 'Lifestyle', 'Finance'];
  categorieSelected = 'All';
  changeCategories(cat: string) {
    if (this.categorieSelected == cat) return;
    this.categorieSelected = cat;
  }
  blogs = [
    {
      cat: 'technology',
      title: 'helllo world',
      descroption: 'A Simple Step-by-Step Guide to Managing Your Lifestyle',
      image: 'bloc_pic_1.png',
    },
    {
      cat: 'technology',
      title: 'helllo world',
      descroption: 'A Simple Step-by-Step Guide to Managing Your Lifestyle',
      image: 'bloc_pic_2.png',
    },
    {
      cat: 'technology',
      title: 'helllo world',
      descroption: 'A Simple Step-by-Step Guide to Managing Your Lifestyle',
      image: 'bloc_pic_3.png',
    },
    {
      cat: 'technology',
      title: 'helllo world',
      descroption: 'A Simple Step-by-Step Guide to Managing Your Lifestyle',
      image: 'bloc_pic_4.png',
    },
    {
      cat: 'technology',
      title: 'helllo world',
      descroption: 'A Simple Step-by-Step Guide to Managing Your Lifestyle',
      image: 'bloc_pic_5.png',
    },
  ];
}
