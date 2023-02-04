import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostitemService } from './postitem.service';
import { CreatePostitemDto } from './dto/create-postitem.dto';
import { UpdatePostitemDto } from './dto/update-postitem.dto';

@Controller('postitem')
export class PostitemController {
  constructor(private readonly postitemService: PostitemService) { }

  @Post()
  create(@Body() createPostitemDto: CreatePostitemDto) {
    return this.postitemService.create(createPostitemDto);
  }

  @Get()
  findAll() {
    return this.postitemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postitemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostitemDto: UpdatePostitemDto) {
    return this.postitemService.update(+id, updatePostitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postitemService.remove(+id);
  }

  // 给帖子添加回复
  @Post('/add/comment')
  addComment(@Body() comment: { comment: string, commentatoruuid: string, commented_post: number }) {
    return this.postitemService.addComment(comment)
  }

  // 查看帖子回复
  @Get('/get/comment/:postitemId')
  findPostCommentById(@Param('postitemId') postitemId: number) {
    return this.postitemService.findPostCommentById(postitemId)
  }

  @Delete('/delete/comment/:id')
  removeComment(@Param('id') id: number) {
    return this.postitemService.removeComment(id)
  }
}
