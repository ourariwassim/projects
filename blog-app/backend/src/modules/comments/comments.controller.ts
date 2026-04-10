import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { commentsService } from './comments.service';
import { createCommentDto } from 'src/common/dtos/createCommentDto';
import { updateCommentDto } from 'src/common/dtos/updateCommentDto';

@Controller('comment')
export class commentController {
  constructor(private readonly commentService: commentsService) {}
  @Post('createComment/:userId/:blogId')
  createComment(
    @Param('userId') userId: string,
    @Param('blogId') blogId: string,
    @Body() createCommentDto: createCommentDto,
  ) {
    return this.commentService.createComment(userId, blogId, createCommentDto);
  }

  @Post('updateComment/:id')
  updateComment(
    @Param('id') commentId: string,
    @Body() updateCommentDto: updateCommentDto,
  ) {
    return this.commentService.updateComment(commentId, updateCommentDto);
  }

  @Get('getCommentByUser/:id')
  getCommentByUser(@Param('id') userId: string) {
    return this.commentService.getCommmentByUser(userId);
  }

  @Get('getCommmentByBlog/:id')
  getCommmentByBlog(@Param('id') blogId: string) {
    return this.commentService.getCommmentByBlog(blogId);
  }

  @Get('getCommentByCreator/:id')
  getCommentByCreator(@Param('id') userId: string) {
    return this.commentService.getCommentByBlogCreator(userId);
  }

  @Delete('deleteComment/:id')
  deleteComment(@Param('id') id: string) {
    return this.commentService.deleteComment(id);
  }

  @Get('commentCount/:id')
  commentCount(@Param('id') userId: string) {
    return this.commentService.commentCount(userId);
  }
}
