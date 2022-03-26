import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.userModel
      .findOne({ user: createUserDto.user })
      .exec();

    if (userExists) throw new BadRequestException('User already exists');

    const hasedPassword = await bcrypt.hash(createUserDto.password, 8);

    createUserDto.password = hasedPassword;

    const createdUser = new this.userModel(createUserDto);

    return await createdUser.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(_id: string) {
    const user = await this.userModel.findOne({ _id });

    if (!user) throw new BadRequestException('User does not exist');

    return user;
  }

  update(_id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a user`;
  }

  async remove(_id: string) {
    // const user = await this.userModel
    //   .findById(_id, (err, adventure) => {
    //     if (err) return;

    //     return adventure;
    //   })
    //   .exec();

    const user = await this.userModel.findOne({ _id });

    if (!user) throw new BadRequestException('User does not exist');

    await this.userModel.deleteOne({ _id }).exec();
  }
}
