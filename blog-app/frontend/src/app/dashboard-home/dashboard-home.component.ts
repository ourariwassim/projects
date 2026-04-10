import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { CommentService } from '../../services/comment/comment.service';
import { blog } from '../../types/blog.interface';

@Component({
  selector: 'app-dashboard-home',
  imports: [],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css',
})
export class DashboardHomeComponent {
  blogs: blog[] = [];
  blogCount = 0;
  commentCount = 0;
  constructor(
    private readonly blogService: BlogService,
    private readonly commentService: CommentService,
  ) {}

  getLatestBlogs() {
    this.blogService
      .getLatestBlogsById(localStorage.getItem('id')!)
      .subscribe((result: blog[]) => {
        this.blogs = result;
      });
  }
  getBlogCount() {
    this.blogService
      .getBlogCount(localStorage.getItem('id')!)
      .subscribe((result: { count: number }) => {
        this.blogCount = result.count;
      });
  }
  getCommentCount() {
    this.commentService
      .getCommentCount()
      .subscribe((result: { count: number }) => {
        this.commentCount = result.count;
      });
  }

  ngOnInit() {
    this.getBlogCount();
    this.getCommentCount();
    this.getLatestBlogs();
  }
  deleteBlog(blogId: string) {
    this.blogService.deleteBlog(blogId).subscribe(() => {
      this.getLatestBlogs();
      this.getBlogCount();
      this.getCommentCount();
    });
  }
}
