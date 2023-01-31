import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly User: Repository<User>) { } // typeorm 依赖注入


  create(createUserDto: CreateUserDto) {
    // createUserDto 是请求req里传过来经过管道之后的参数
    let data = new User()
    Object.assign(data, createUserDto)  // 合并两个对象获取请求中的贴吧用户名和用户的主人

    let create_time = new Date()    //获取创建时间
    data.create_time = create_time

    let uuid = randomUUID()
    data.forumUseruuid = uuid
    data.profilePhotoLink = `https://api.dicebear.com/5.x/identicon/svg?seed=${uuid}`

    return this.User.save(data);
  }

  findAll() {
    return this.User.find();
  }

  findOne(masterCloudID: string) {
    return this.User.find(
      {
        where: {
          masterCloudID
        }
      }
    )
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(DeleteForumUserUUid: any) {
    // this.User.find()方法不返回null 会导致不报错
    let tobeDeleteUser = await this.User.findOneBy({ forumUseruuid: DeleteForumUserUUid.forumUseruuid })   // 这一步是看数据库里有没有实体
    return this.User.remove(tobeDeleteUser)
  }

}
