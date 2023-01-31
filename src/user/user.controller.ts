import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':cloudID')      //  符合这个路径的用这个路由
  findOne(@Param('cloudID') masterCloudID: string) {  // 获取请求中的param
    // console.log('cloudID:', masterCloudID); // 只会获取占位符占着的参数,不会获取?之后的参数

    return this.userService.findOne(masterCloudID);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete()
  remove(@Body() DeleteForumUserUUid) {
    return this.userService.remove(DeleteForumUserUUid);
  }
}
