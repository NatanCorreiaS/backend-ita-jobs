import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserDto: Prisma.usersCreateInput) {
    return this.databaseService.users.create({ data: createUserDto });
  }

  async findAll() {
    return this.databaseService.users.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.users.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: Prisma.usersUpdateInput) {
    return this.databaseService.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.users.delete({ where: { id } });
  }
}
