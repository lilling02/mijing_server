import { Module } from '@nestjs/common';
import { LeavingwordService } from './leavingword.service';
import { LeavingwordController } from './leavingword.controller';
import { LeavingWord } from './entities/leavingword.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LeavingWord])],
  controllers: [LeavingwordController],
  providers: [LeavingwordService]
})
export class LeavingwordModule { }
