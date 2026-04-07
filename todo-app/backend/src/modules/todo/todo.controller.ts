import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { todoService } from './todo.service';
import { lineDto } from 'src/commmon/DTO/lineDto';

@Controller('todo')
export class todoController {
  constructor(private readonly todoService: todoService) {}
  @Get()
  findAll() {
    return this.todoService.getLines();
  }

  @Post()
  insertOne(@Body() line: lineDto) {
    console.log(line);
    return this.todoService.createLine(line);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.todoService.deleteLine(id);
  }
  @Patch()
  updateOne(@Body() line: lineDto) {
    return this.todoService.updateOne(line);
  }
}
