import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { createBlogDto } from 'src/common/dtos/createBlogDto';
import { blogService } from './blog.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multer } from 'multer';

@Controller('blog')
export class blogController {
  constructor(private readonly blogService: blogService) {}
  @UseInterceptors(FileInterceptor('file'))
  @Post('createBlog/:id')
  createBlog(
    @Param('id') userId: string,
    @Body() createBlogDto: createBlogDto,
    @UploadedFile() file: multer.file,
  ) {
    return this.blogService.createBlog(userId, createBlogDto, file);
  }

  @Get('getBlogs/:id')
  getBlogsById(@Param('id') userId: string) {
    return this.blogService.getBlogsById(userId);
  }
  @Get('getLatestBlogs/:id')
  getLatestBlogsById(@Param('id') userId: string) {
    return this.blogService.getLatestBlogsById(userId);
  }

  @Get('getBlogCount/:id')
  getBlogCount(@Param('id') userId: string) {
    return this.blogService.getBlogCount(userId);
  }

  @Delete('deleteBlog/:id')
  deleteBlog(@Param('id') blogId: string) {
    return this.blogService.deleteBlog(blogId);
  }

  @Get('getCommentByBlog/:id')
  getCommentByBlog(@Param('id') userId: string) {
    return this.blogService.getCommentByBlog(userId);
  }
  @Get('getUserComments/:id')
  getUserComments(@Param('id') userId: string) {
    return this.blogService.getUserComments(userId);
  }
}
