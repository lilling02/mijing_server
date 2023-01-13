import { Injectable } from '@nestjs/common';
import { CreateLeavingwordDto } from './dto/create-leavingword.dto';
import { UpdateLeavingwordDto } from './dto/update-leavingword.dto';
import { Repository, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { LeavingWord } from './entities/leavingword.entity';


@Injectable()
export class LeavingwordService {
  constructor(@InjectRepository(LeavingWord) private readonly levingWord: Repository<LeavingWord>) { }

  // 增加一个新的留言
  create(createLeavingwordDto: CreateLeavingwordDto) {
    let data = new LeavingWord()
    data.fullName = createLeavingwordDto.fullName   // 获取前端传来的名字
    data.content = createLeavingwordDto.content     // 获取前端传过来的内容
    data.creattime = new Date().toISOString().slice(0, 19).replace('T', ' ') // 获取当前时间并且转化成mysql的datetime属性

    return this.levingWord.save(data);
  }

  // 查看所有留言
  findAll() {
    return this.levingWord.find();
  }

  // 查看目标 fullName 的留言
  findOne(fullName: string) {
    return this.levingWord.find({
      where: {
        fullName
      }
    });
  }

  // 更新留言  接受留言的id 然后更新留言
  async update(id: number, updateLeavingwordDto: UpdateLeavingwordDto) {
    let updataEntitie = await this.levingWord.findOneById(id);
    if (!updataEntitie) {
      throw new Error("修改失败,数据库中不存在此信息");

    }
    return this.levingWord.update(id, updateLeavingwordDto);
  }

  // 删除留言 接受对应的留言的id 然后进行删除
  async remove(id: number) {

    let removeEntitie = await this.levingWord.findOneById(id);
    return this.levingWord.remove(removeEntitie)
  }
}
