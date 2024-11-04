import { Injectable } from '@nestjs/common';
import { CreateUserDto, GENDER } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private usersList: UpdateUserDto[] = [];
  create(createUserDto: CreateUserDto) {
    const id = this.usersList.length + 1;
    this.usersList.push({ ...createUserDto, id }); // spread operator
    console.log(this.usersList);
    return { message: 'Acknowledged, task succeeded!' };
  }

  findAll() {
    console.log(this.usersList);
    return {
      message: 'Acknowledged, retrieving all users',
      data: this.usersList,
    };
  }

  findOne(id: number) {
    const possibleUser = this.usersList.find((u) => u.id === id);
    if (possibleUser) {
      return { message: 'Acknowledged, retrieving user', data: possibleUser };
    } else {
      return { message: 'User not found' };
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const possibleUser = this.usersList.find((u) => u.id === id);
    if(possibleUser) {
      // algorithm to update user
      this.usersList = this.usersList.map((u) => {
        if(u.id === id) {
          return { ...u, ...updateUserDto };
        } else {
          return u;
        }
      });

      return { message: 'Acknowledged, User updated!' };
    } else {
      return { message: 'User not found' };
    }
  }

  remove(id: number) {
    const possibleUser = this.usersList.find((u) => u.id === id);
    if (possibleUser) {
      this.usersList = this.usersList.filter((u) => u.id !== id);
      return { message: 'Acknowledged, User removed!' };
    } else {
      return { message: 'User not found' };
    }
  }
}
