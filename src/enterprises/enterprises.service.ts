import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EnterprisesService {
  // private enterpriseList: UpdateEnterpriseDto[] = [];
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEnterpriseDto: Prisma.enterprisesCreateInput) {
    return this.databaseService.enterprises.create({
      data: createEnterpriseDto,
    });

    // const id = this.enterpriseList.length + 1;
    // this.enterpriseList.push({ ...createEnterpriseDto, id }); // spread operator
    // console.log(this.enterpriseList);
    // return { message: 'Acknowledged, task succeeded!' };
  }

  async findAll() {
    return this.databaseService.enterprises.findMany({});
    // console.log(this.enterpriseList);
    // return {
    //   message: 'Acknowledged, retrieving all enterprises',
    //   data: this.enterpriseList,
    // };
  }

  async findOne(id: number) {
    return this.databaseService.enterprises.findUnique({ where: { id } });
    // const possibleUser = this.enterpriseList.find((u) => u.id === id);
    // if (possibleUser) {
    //   return {
    //     message: 'Acknowledged, retrieving enterprise',
    //     data: possibleUser,
    //   };
    // } else {
    //   return { message: 'Enterprise not found' };
    // }
  }

  async update(id: number, updateUserDto: Prisma.enterprisesUpdateInput) {
    return this.databaseService.enterprises.update({
      where: { id },
      data: updateUserDto,
    });
    // const possibleUser = this.enterpriseList.find((u) => u.id === id);
    // if (possibleUser) {
    //   // algorithm to update user
    //   this.enterpriseList = this.enterpriseList.map((u) => {
    //     if (u.id === id) {
    //       return { ...u, ...updateUserDto };
    //     } else {
    //       return u;
    //     }
    //   });

    //   return { message: 'Acknowledged, Enterprise updated!' };
    // } else {
    //   return { message: 'Enterprise not found' };
    // }
  }

  async remove(id: number) {
    return this.databaseService.enterprises.delete({ where: { id } });
    //   const possibleUser = this.enterpriseList.find((u) => u.id === id);
    //   if (possibleUser) {
    //     this.enterpriseList = this.enterpriseList.filter((u) => u.id !== id);
    //     return { message: 'Acknowledged, Enterprise removed!' };
    //   } else {
    //     return { message: 'Enterprise not found' };
    //   }
  }
}
