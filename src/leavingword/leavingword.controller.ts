import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeavingwordService } from './leavingword.service';
import { CreateLeavingwordDto } from './dto/create-leavingword.dto';
import { UpdateLeavingwordDto } from './dto/update-leavingword.dto';

@Controller('leavingword')
export class LeavingwordController {
  constructor(private readonly leavingwordService: LeavingwordService) { }

  @Post()
  create(@Body() createLeavingwordDto: CreateLeavingwordDto) {
    return this.leavingwordService.create(createLeavingwordDto);
  }

  @Get()
  findAll() {
    return this.leavingwordService.findAll();
  }

  @Get(':fullName')
  findOne(@Param('fullName') fullName: string) {
    return this.leavingwordService.findOne(fullName);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeavingwordDto: UpdateLeavingwordDto) {
    return this.leavingwordService.update(+id, updateLeavingwordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leavingwordService.remove(+id);
  }
}
