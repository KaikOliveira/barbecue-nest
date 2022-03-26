import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') _id: string) {
    return await this.userService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(_id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') _id: string) {
    return await this.userService.remove(_id);
  }
}
