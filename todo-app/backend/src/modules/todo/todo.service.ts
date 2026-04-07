import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lineDto } from 'src/commmon/DTO/lineDto';
import { toDo } from 'src/commmon/models/todo';
import { Repository } from 'typeorm';

@Injectable()
export class todoService {
  async updateOne(line: lineDto) {
    console.log('Ho');
    console.log(line);
    const result = await this.todoRep.findOneBy({ id: line.id });
    if (result == null) return;
    result.content = line.content;
    return this.todoRep.save(result);
  }
  constructor(@InjectRepository(toDo) readonly todoRep: Repository<toDo>) {}
  createLine(line: lineDto) {
    console.log(line);
    const result = this.todoRep.create(line);
    return this.todoRep.save(result);
  }
  deleteLine(id: string) {
    return this.todoRep.delete(id);
  }
  getLines() {
    return this.todoRep.find();
  }
}
