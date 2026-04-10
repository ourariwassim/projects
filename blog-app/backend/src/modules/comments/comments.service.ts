import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { comment } from 'src/common/models/comment.entity';
import { userService } from '../userModule/user.service';
import { blogService } from '../blogModule/blog.service';
import { createBlogDto } from 'src/common/dtos/createBlogDto';
import { Repository } from 'typeorm';
import { createCommentDto } from 'src/common/dtos/createCommentDto';
import { updateCommentDto } from 'src/common/dtos/updateCommentDto';
import { user } from 'src/common/models/user.entity';

@Injectable()
export class commentsService {
  constructor(
    @InjectRepository(comment) private readonly commentRep: Repository<comment>,

    private readonly userService: userService,
    private readonly blogService: blogService,
  ) {}

  async createComment(
    userId: string,
    blogId: string,
    createCommentDto: createCommentDto,
  ) {
    const user = await this.userService.getUserById(userId);
    const blog = await this.blogService.getBlogById(blogId);
    if (!user || !blog) return;
    const comment = this.commentRep.create({
      ...createCommentDto,
      user,
      blog,
    });
    return this.commentRep.save(comment);
  }
  async updateComment(commentId: string, updateCommentDto: updateCommentDto) {
    const comment = await this.commentRep.findOneBy({ id: commentId });
    if (!comment) return;
    const result = Object.assign(comment, updateCommentDto);
    return this.commentRep.save(result);
  }
  getCommmentByBlog(blogId: string) {
    return this.commentRep.find({
      where: { blog: { id: blogId } },
      relations: ['user'],
    });
  }
  getCommmentByUser(UserId: string) {
    return this.commentRep.find({
      where: { user: { id: UserId } },
      relations: ['blog'],
    });
  }
  getCommentByBlogCreator(userId: string) {
    return this.commentRep.find({
      where: { blog: { user: { id: userId } } },
      relations: ['user'],
    });
  }
  deleteComment(commentId: string) {
    return this.commentRep.delete({ id: commentId });
  }
  async commentCount(userId: string) {
    return {
      count: await this.commentRep.count({
        where: { blog: { user: { id: userId } } },
      }),
    };
  }
}
