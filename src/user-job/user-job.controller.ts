import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserJobService } from './user-job.service';
import { Prisma } from '@prisma/client';

@Controller('user-job')
export class UserJobController {
  constructor(private readonly userJobService: UserJobService) {}

  @Post()
  create(@Body() createUserJobDto: Prisma.users_jobCreateInput) {
    return this.userJobService.create(createUserJobDto);
  }

  @Get()
  findAll() {
    return this.userJobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userJobService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserJobDto: Prisma.users_jobUpdateInput,
  ) {
    return this.userJobService.update(+id, updateUserJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userJobService.remove(+id);
  }
}
