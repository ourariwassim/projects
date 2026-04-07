import { Component } from '@angular/core';
import { LineComponent } from '../line/line.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { LineStructure } from '../types/LineStructure';

@Component({
  selector: 'app-search',
  imports: [LineComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private readonly todoService: TodoService) {}
  getToDos() {
    this.todoService.getToDos().subscribe((data: LineStructure[]) => {
      this.lines = data;
    });
  }
  ngOnInit() {
    this.getToDos();
  }
  line: LineStructure = { content: '' };
  content: string = '';
  lines!: LineStructure[];
  editingId: string | undefined;
  prev: string = '0';
  actionEvent($event: string, index: string | undefined) {
    console.log(this.content);
    if ($event == 'Delete' && index) {
      this.todoService.removeTodo(index).subscribe(() => {
        this.getToDos();
      });
    }
    if ($event == 'Edit' || $event == 'Save') {
      if ($event && this.editingId == index && this.editingId) {
        this.editingId = undefined;
      } else {
        this.editingId = index;
      }
    }
  }
  addTask() {
    this.line.content = this.content;

    this.todoService.setTodos(this.line).subscribe(() => {
      this.content = '';
      this.getToDos();
    });
  }
  saveContent($event: string) {
    console.log('hi');
    console.log($event);
    if (!this.editingId) {
      return;
    }
    this.todoService.updateTodo(this.editingId, $event).subscribe(() => {
      this.getToDos();
    });
  }
}
