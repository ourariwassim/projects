import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AddBlogComponentComponent } from './add-blog-component/add-blog-component.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CommentsComponent } from './comments/comments.component';
import { BlogShowcaseComponent } from './blog-showcase/blog-showcase.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: 'blogShowcase/:id', component: BlogShowcaseComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'home', component: DashboardHomeComponent },
      { path: 'addBlog', component: AddBlogComponentComponent },
      { path: 'blogList', component: BlogListComponent },
      { path: 'comment', component: CommentsComponent },
    ],
  },
];
