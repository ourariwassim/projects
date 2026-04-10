import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent, NgClass, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private readonly router: Router) {}
  isActive = 0;
  links = [
    { text: 'Dashboard', src: 'home_icon.svg', routerLink: '/home' },
    { text: 'Add Blogs', src: 'add_icon.svg', routerLink: '/addBlog' },
    { text: 'Blog List', src: 'list_icon.svg', routerLink: '/blogList' },
    { text: 'Comments', src: 'comment_icon.svg', routerLink: '/comment' },
  ];
  changeHover(index: number) {
    this.isActive = index;
    this.router.navigate(['/dashboard' + this.links[index].routerLink]);
  }
  logout() {
    this.router.navigate(['login']);
  }
}
