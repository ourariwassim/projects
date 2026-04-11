import { Module } from '@nestjs/common';
import { commentsService } from './comments.service';
import { commentController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/common/models/user.entity';
import { blog } from 'src/common/models/blog.entity';
import { comment } from 'src/common/models/comment.entity';
import { blogService } from '../blogModule/blog.service';
import { userService } from '../userModule/user.service';
import { imagekitService } from '../imagekit/imagekit.service';
import { gemini } from '../gemini/gemini.service';

@Module({
  providers: [
    commentsService,
    blogService,
    userService,
    imagekitService,
    gemini,
  ],
  controllers: [commentController],
  imports: [TypeOrmModule.forFeature([user, blog, comment])],
})
export class commentModule {}
