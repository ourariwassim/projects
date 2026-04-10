import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommentService } from '../../services/comment/comment.service';
import { BlogService } from '../../services/blog/blog.service';
import { commentByBlog } from '../../types/commentByBlog.interface';

@Component({
  selector: 'app-comments',
  imports: [ButtonComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  commentByBlog: commentByBlog[] = [];
  constructor(
    private readonly commentService: CommentService,
    private readonly blogService: BlogService,
  ) {}
  allComments = true;
  changeToAllComment() {
    this.getCommentByBlog();
    this.allComments = true;
  }
  changeToMyComment() {
    this.getUserComments();
    this.allComments = false;
  }
  ngOnInit() {
    this.getCommentByBlog();
  }
  getCommentByBlog() {
    this.blogService
      .getCommentByBlog(localStorage.getItem('id')!)
      .subscribe((result) => {
        this.commentByBlog = result;
      });
  }
  getUserComments() {
    this.blogService
      .getUserComments(localStorage.getItem('id')!)
      .subscribe((result) => {
        this.commentByBlog = result;
      });
  }
  deleteComment(id: string) {
    this.commentService.deleteComment(id).subscribe();
    if (this.allComments) {
      this.getCommentByBlog();
    } else {
      this.getUserComments();
    }
  }
}
