import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createBlogDto } from 'src/common/dtos/createBlogDto';
import { blog } from 'src/common/models/blog.entity';
import { Repository } from 'typeorm';
import { userService } from '../userModule/user.service';
import { multer } from 'multer';
import { imagekitService } from '../imagekit/imagekit.service';

@Injectable()
export class blogService {
  constructor(
    @InjectRepository(blog) private readonly blogRep: Repository<blog>,
    private readonly userService: userService,
    private readonly imagekitService: imagekitService,
  ) {}

  getBlogsById(id: string) {
    return this.blogRep.findBy({ user: { id: id } });
  }
  async createBlog(
    userId: string,
    createBlogDto: createBlogDto,
    file: multer.file,
  ) {
    const user = await this.userService.getUserById(userId);
    if (!user) return;
    const result = this.blogRep.create({
      ...createBlogDto,
      user,
    });
    this.imagekitService.uploadImage(file, result.id);
    return this.blogRep.save(result);
  }
  getLatestBlogsById(userId) {
    return this.blogRep.find({
      where: { user: { id: userId } },
      order: { created: 'DESC' },
      take: 5,
    });
  }
  getBlogById(blogId: string) {
    return this.blogRep.findOneBy({ id: blogId });
  }
  async getBlogCount(userId: string) {
    return {
      count: await this.blogRep.count({ where: { user: { id: userId } } }),
    };
  }
  deleteBlog(blogId: string) {
    return this.blogRep.delete({ id: blogId });
  }

  async getCommentByBlog(userId: string) {
    return this.blogRep.find({
      where: { user: { id: userId } },
      relations: ['comment', 'comment.user'],
    });
  }
  getUserComments(userId: string) {
    return this.blogRep.find({
      where: { comment: { user: { id: userId } } },
      relations: ['comment', 'comment.user'],
    });
  }
}
