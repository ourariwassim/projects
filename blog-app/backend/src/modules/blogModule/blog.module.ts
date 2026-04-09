import { Module } from '@nestjs/common';
import { blogController } from './blog.controller';
import { userService } from '../userModule/user.service';
import { blogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { blog } from 'src/common/models/blog.entity';
import { user } from 'src/common/models/user.entity';
import { imagekitService } from '../imagekit/imagekit.service';

@Module({
  controllers: [blogController],
  providers: [blogService, userService, imagekitService],
  imports: [TypeOrmModule.forFeature([blog, user])],
})
export class blogModule {}
