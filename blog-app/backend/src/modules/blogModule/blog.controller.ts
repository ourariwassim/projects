import {
  Body,
  Controller,
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
}
