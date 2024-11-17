import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserJobService } from './user-job.service';
import { CreateUserJobDto } from './dto/create-user-job.dto';
import { UpdateUserJobDto } from './dto/update-user-job.dto';

@Controller('user-job')
export class UserJobController {
  constructor(private readonly userJobService: UserJobService) {}

  @Post()
  create(@Body() createUserJobDto: CreateUserJobDto) {
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
  update(@Param('id') id: string, @Body() updateUserJobDto: UpdateUserJobDto) {
    return this.userJobService.update(+id, updateUserJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userJobService.remove(+id);
  }
}
