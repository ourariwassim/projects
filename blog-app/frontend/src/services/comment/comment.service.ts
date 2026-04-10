import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private readonly http: HttpClient) {}
  url = 'http://localhost:3000/comment';
  getCommentCount() {
    return this.http.get<{ count: number }>(
      this.url + '/commentCount/' + localStorage.getItem('id'),
    );
  }
  deleteComment(id: string) {
    return this.http.delete(this.url + '/deleteComment/' + id);
  }
}
