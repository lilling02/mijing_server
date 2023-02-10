import { Injectable } from '@nestjs/common';
import { CreatePostitemDto } from './dto/create-postitem.dto';
import { UpdatePostitemDto } from './dto/update-postitem.dto';
import { Repository } from 'typeorm';
import { Postitem } from './entities/postitem.entity';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class PostitemService {
  constructor(
    @InjectRepository(Comment) private readonly Comment: Repository<Comment>,
    @InjectRepository(Postitem) private readonly Postitem: Repository<Postitem>
  ) { }

  create(createPostitemDto: CreatePostitemDto) {
    let data = new Postitem()
    data.master_forum_useruuid = createPostitemDto.master_forum_useruuid
    data.post_header = createPostitemDto.post_header
    data.post_content = createPostitemDto.post_content
    return this.Postitem.save(data);
  }

  findAll() {   // 获取所有的帖子
    return this.Postitem.find();
  }

  findOne(id: number) {   // 获取对应id的帖子
    return this.Postitem.find(
      {
        where: {
          id
        }
      }
    )

  }

  update(id: number, updatePostitemDto: UpdatePostitemDto) {
    return `This action updates a #${id} postitem`;
  }

  async remove(id: number) {
    // this.User.find()方法不返回null 会导致不报错
    let tobeDeletePost = await this.Postitem.findOneBy({ id })   // 这一步是看数据库里有没有实体
    return this.Postitem.remove(tobeDeletePost)
  }

  // 添加回复的方法
  async addComment(comment: { comment: string, commentatoruuid: string, commented_post: number }) {

    // 首先获取被回复的关联帖子项     如果要获取关联的表的关联内容,需要添加一个relation,具体操作如下
    const postitem = await this.Postitem.findOne({ relations: ['comment'], where: { id: comment.commented_post } })

    // 创建一个数组用于存储帖子的回复

    let data = new Comment()
    data.comment = comment.comment
    data.commentatoruuid = comment.commentatoruuid
    data.commented_post = comment.commented_post
    await this.Comment.save(data)

    postitem.comment.push(data)

    // 如果把新的列表给postitem.comment 那么会在关联的key字段上加上关联的id

    this.Postitem.save(postitem)


  }

  // 返回帖子信息以及帖子的评论
  async findPostCommentById(postitemId) {
    const postitem = await this.Postitem.findOne({ relations: ['comment'], where: { id: postitemId } })
    postitem.comment.forEach(item => {
      // let commotor = this.UserService.findOntbyUUID(item.commentatoruuid)
      // console.log(commotor);

    })
    return postitem
  }

  // 删除一个评论
  async removeComment(id: number) {
    let deletedComment = await this.Comment.findOneBy({ id })   // 这一步是看数据库里有没有实体
    return this.Comment.remove(deletedComment)
  }
}
