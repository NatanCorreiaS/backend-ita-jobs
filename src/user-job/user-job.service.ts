import { Injectable } from '@nestjs/common';
import { CreateUserJobDto } from './dto/create-user-job.dto';
import { UpdateUserJobDto } from './dto/update-user-job.dto';

@Injectable()
export class UserJobService {
  create(createUserJobDto: CreateUserJobDto) {
    return 'This action adds a new userJob';
  }

  findAll() {
    return `This action returns all userJob`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userJob`;
  }

  update(id: number, updateUserJobDto: UpdateUserJobDto) {
    return `This action updates a #${id} userJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} userJob`;
  }
}
