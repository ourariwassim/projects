import { Module } from "@nestjs/common";
import { todoService } from "./todo.service";
import { todoController } from "./todo.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { toDo } from "src/commmon/models/todo";


@Module({
    providers:[todoService],
    controllers:[todoController],
    imports:[TypeOrmModule.forFeature([toDo])]
})
export class todoModule{}