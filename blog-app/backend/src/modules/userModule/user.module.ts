import { Module } from '@nestjs/common';
import { userService } from './user.service';
import { userController } from './user.Controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/common/models/user.entity';

@Module({
  providers: [userService],
  controllers: [userController],
  imports: [TypeOrmModule.forFeature([user])],
})
export class userModule {}
