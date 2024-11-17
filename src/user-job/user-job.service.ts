import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserJobService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserJobDto: Prisma.users_jobCreateInput) {
    return this.databaseService.users_job.create({ data: createUserJobDto });
  }

  async findAll() {
    return this.databaseService.users_job.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.users_job.findUnique({ where: { id } });
  }

  async update(id: number, updateUserJobDto: Prisma.users_jobUpdateInput) {
    return this.databaseService.users_job.update({
      where: { id },
      data: updateUserJobDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.users_job.delete({ where: { id } });
  }
}
