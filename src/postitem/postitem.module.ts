import { Module } from '@nestjs/common';
import { PostitemService } from './postitem.service';
import { PostitemController } from './postitem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postitem } from './entities/postitem.entity';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Postitem, Comment])],
  controllers: [PostitemController],
  providers: [PostitemService]
})
export class PostitemModule { }
