import { Component } from '@angular/core';
import { blog } from '../../types/blog.interface';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  constructor(private readonly blogService: BlogService) {}
  blogs: blog[] = [];
  deleteBlog(blogId: string) {
    this.blogService.deleteBlog(blogId).subscribe(() => {
      this.getAllBlogs();
    });
  }
  ngOnInit() {
    this.getAllBlogs();
  }
  getAllBlogs() {
    this.blogService
      .getAllBlogs(localStorage.getItem('id')!)
      .subscribe((result: blog[]) => {
        this.blogs = result;
      });
  }
}
