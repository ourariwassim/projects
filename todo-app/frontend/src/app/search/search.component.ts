import { Component } from '@angular/core';
import { LineComponent } from '../line/line.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [LineComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  content: string = '';
  lines: string[] = ['helo', 'test'];
  actionEvent($event: string, index: number) {
    this.lines.splice(index, 1);
  }
  addTask() {
    if (this.content != '') {
      this.lines.push(this.content);
      this.content = '';
    }
  }
}
