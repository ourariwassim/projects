import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blog } from '../../types/blog.interface';
import { commentByBlog } from '../../types/commentByBlog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  url = 'http://localhost:3000/blog';
  constructor(private readonly http: HttpClient) {}
  getBlogCount(userId: string) {
    return this.http.get<{ count: number }>(
      this.url + '/getBlogCount/' + userId,
    );
  }
  getLatestBlogsById(userId: string) {
    return this.http.get<blog[]>(this.url + '/getLatestBlogs/' + userId);
  }
  deleteBlog(blogId: string) {
    return this.http.delete(this.url + '/deleteBlog/' + blogId);
  }
  getAllBlogs(userId: string) {
    return this.http.get<blog[]>(this.url + '/getBlogs/' + userId);
  }
  getCommentByBlog(userId: string) {
    return this.http.get<commentByBlog[]>(
      this.url + '/getCommentByBlog/' + userId,
    );
  }
  getUserComments(userId: string) {
    return this.http.get<commentByBlog[]>(
      this.url + '/getUserComments/' + userId,
    );
  }
}
