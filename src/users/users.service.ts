import { Injectable } from '@nestjs/common';
import { CreateUserDto, GENDER } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  // private usersList: UpdateUserDto[] = [];
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserDto: Prisma.usersCreateInput) {
    return this.databaseService.users.create({ data: createUserDto });

    // const id = this.usersList.length + 1;
    // this.usersList.push({ ...createUserDto, id }); // spread operator
    // console.log(this.usersList);
    // return { message: 'Acknowledged, task succeeded!' };
  }

  async findAll() {
    return this.databaseService.users.findMany({});
    // console.log(this.usersList);
    // return {
    //   message: 'Acknowledged, retrieving all users',
    //   data: this.usersList,
    // };
  }

  async findOne(id: number) {
    return this.databaseService.users.findUnique({ where: { id } });
    // const possibleUser = this.usersList.find((u) => u.id === id);
    // if (possibleUser) {
    //   return { message: 'Acknowledged, retrieving user', data: possibleUser };
    // } else {
    //   return { message: 'User not found' };
    // }
  }

  async update(id: number, updateUserDto: Prisma.usersUpdateInput) {
    return this.databaseService.users.update({
      where: { id },
      data: updateUserDto,
    });
    // const possibleUser = this.usersList.find((u) => u.id === id);
    // if (possibleUser) {
    //   // algorithm to update user
    //   this.usersList = this.usersList.map((u) => {
    //     if (u.id === id) {
    //       return { ...u, ...updateUserDto };
    //     } else {
    //       return u;
    //     }
    //   });

    //   return { message: 'Acknowledged, User updated!' };
    // } else {
    //   return { message: 'User not found' };
    // }
  }

  async remove(id: number) {
    return this.databaseService.users.delete({ where: { id } });
    // const possibleUser = this.usersList.find((u) => u.id === id);
    // if (possibleUser) {
    //   this.usersList = this.usersList.filter((u) => u.id !== id);
    //   return { message: 'Acknowledged, User removed!' };
    // } else {
    //   return { message: 'User not found' };
    // }
  }
}
