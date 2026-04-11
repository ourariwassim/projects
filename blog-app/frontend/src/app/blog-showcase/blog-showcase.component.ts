import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { blog } from '../../types/blog.interface';
import { ActivatedRoute } from '@angular/router';
import Quill from 'quill';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { FooterComponent } from '../footer/footer.component';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-blog-showcase',
  imports: [ButtonComponent, FooterComponent],
  templateUrl: './blog-showcase.component.html',
  styleUrl: './blog-showcase.component.css',
})
export class BlogShowcaseComponent {
  connected = localStorage.getItem('id');

  @ViewChild('editor') editorRef!: ElementRef;
  @ViewChild('comment') com!: ElementRef;
  quill!: Quill;
  constructor(
    private readonly blogService: BlogService,
    private readonly activatedRouter: ActivatedRoute,
    private readonly commentService: CommentService,
  ) {}
  blog!: blog;
  ngAfterViewInit() {
    this.quill = new Quill(this.editorRef.nativeElement, { theme: 'snow' });
    this.quill.setContents(JSON.parse(this.blog.content));
  }
  loadBlog() {
    this.blogService
      .getBlogById(this.activatedRouter.snapshot.paramMap.get('id')!)
      .subscribe((result) => {
        console.log(result);
        this.blog = result;
      });
  }
  ngOnInit() {
    console.log(this.connected);
    this.loadBlog();
  }
  sendComment(c: string) {
    this.commentService
      .createComment(this.connected!, this.blog.id, c)
      .subscribe(() => {
        this.loadBlog();
      });
    this.com.nativeElement.value = '';
  }
}
