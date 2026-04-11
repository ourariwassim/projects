import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';
import { ButtonComponent } from '../button/button.component';
import { BlogService } from '../../services/blog/blog.service';
@Component({
  selector: 'app-add-blog-component',
  imports: [FormsModule, ButtonComponent],
  templateUrl: './add-blog-component.component.html',
  styleUrl: './add-blog-component.component.css',
})
export class AddBlogComponentComponent {
  constructor(private readonly blogService: BlogService) {}
  @ViewChild('title') title!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('category') cat!: ElementRef;
  formData: FormData = new FormData();
  file!: File;
  src!: string | null;
  @ViewChild('editor') editorRef!: ElementRef;
  quill!: Quill;
  content = '';
  ngAfterViewInit() {
    this.quill = new Quill(this.editorRef.nativeElement, {
      theme: 'snow',
    });
    this.quill.setText('');
  }
  uploadBlog(title: string, Description: string, category: string) {
    console.log(this.quill.getContents());
    if (
      !title ||
      !Description ||
      !category ||
      !this.file ||
      this.quill.getContents().length() == 0
    ) {
      return;
    }
    this.formData.append('file', this.file);
    this.formData.append('title', title);
    this.formData.append('description', Description);
    this.formData.append('category', category);
    this.formData.append('content', JSON.stringify(this.quill.getContents()));

    this.blogService
      .createBlog(localStorage.getItem('id')!, this.formData)
      .subscribe(() => {
        this.src = null;
        this.title.nativeElement.value = '';
        this.description.nativeElement.value = '';
        this.cat.nativeElement.value = '';
        this.quill.setText('');
      });
  }
  selecteFile($event: any) {
    this.file = $event.target.files[0];
    this.src = URL.createObjectURL(this.file);
  }
  generateBlog(title: string) {
    this.blogService.generateBlog(title).subscribe((result) => {
      console.log(result.content);
      this.quill.setText(result.content);
    });
  }
}
