import { Injectable } from '@nestjs/common';
import { CreateDbtestDto } from './dto/create-dbtest.dto';
import { UpdateDbtestDto } from './dto/update-dbtest.dto';
import { Dbtest } from './entities/dbtest.entity';
import { Repository, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class DbtestService {
  constructor(@InjectRepository(Dbtest) private readonly Dbtest: Repository<Dbtest>) { }
  create(createDbtestDto: CreateDbtestDto) {
    const data = new Dbtest()
    data.firstName = createDbtestDto.firstName
    data.lastName = createDbtestDto.lastName

    return this.Dbtest.save(data);
  }

  findAll() {
    return this.Dbtest.find();
  }

  findOne(id: number) {
    return this.Dbtest.find({
      where: {
        id
      }
    });
  }

  update(id: number, updateDbtestDto: UpdateDbtestDto) {
    return this.Dbtest.update(id, updateDbtestDto);
  }

  remove(id: number) {
    return this.Dbtest.delete(id);
  }
}
