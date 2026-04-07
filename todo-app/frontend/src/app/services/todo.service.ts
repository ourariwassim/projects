import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LineStructure } from '../types/LineStructure';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'http://localhost:3000/todo';
  constructor(private readonly http: HttpClient) {}
  getToDos() {
    return this.http.get<LineStructure[]>(this.url);
  }
  setTodos(line: LineStructure) {
    return this.http.post(this.url, line);
  }
  removeTodo(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
  updateTodo(id: string, content: string) {
    console.log(content);
    return this.http.patch(this.url, { id, content });
  }
}
