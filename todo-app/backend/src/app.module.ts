import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todoModule } from './modules/todo/todo.module';
import { toDo } from './commmon/models/todo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [toDo],
      synchronize: true,
    }),
    todoModule
  ],
})
export class AppModule {}
