import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BlogService } from '../../services/blog/blog.service';
import { blog } from '../../types/blog.interface';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, NgClass, CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  logged: string | null = null;
  blogs: blog[] = [];
  constructor(
    private readonly router: Router,
    private readonly blogService: BlogService,
  ) {}
  categories = ['All', 'Technology', 'Startup', 'Lifestyle', 'Finance'];
  categorieSelected = 'All';
  ngOnInit() {
    this.logged = localStorage.getItem('id');
    this.blogService
      .getBlogsOfAllUsers(this.categorieSelected.toLowerCase())
      .subscribe((result) => {
        this.blogs = result;
      });
  }
  changeCategories(cat: string) {
    if (this.categorieSelected == cat) return;
    this.categorieSelected = cat;
    console.log(this.categorieSelected);
    this.blogService
      .getBlogsOfAllUsers(this.categorieSelected.toLowerCase())
      .subscribe((result) => {
        this.blogs = result;
      });
  }
  openLogin() {
    this.router.navigate(['login']);
  }
  openDashboard() {
    this.router.navigate(['/dashboard']);
  }
  openBlog(id: string) {
    this.router.navigate(['blogShowcase/' + id]);
  }
}
