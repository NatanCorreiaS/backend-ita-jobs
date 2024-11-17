import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnterprisesService } from './enterprises.service';
import { Prisma } from '@prisma/client';

@Controller('enterprises')
export class EnterprisesController {
  constructor(private readonly enterprisesService: EnterprisesService) {}

  @Post()
  create(@Body() createEnterpriseDto: Prisma.enterprisesCreateInput) {
    return this.enterprisesService.create(createEnterpriseDto);
  }

  @Get()
  findAll() {
    return this.enterprisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enterprisesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnterpriseDto: Prisma.enterprisesUpdateInput,
  ) {
    return this.enterprisesService.update(+id, updateEnterpriseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enterprisesService.remove(+id);
  }
}
