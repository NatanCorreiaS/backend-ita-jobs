import { Injectable } from '@nestjs/common';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';

@Injectable()
export class EnterprisesService {
  private enterpriseList: UpdateEnterpriseDto[] = [];
  create(createEnterpriseDto: CreateEnterpriseDto) {
    const id = this.enterpriseList.length + 1;
    this.enterpriseList.push({ ...createEnterpriseDto, id }); // spread operator
    console.log(this.enterpriseList);
    return { message: 'Acknowledged, task succeeded!' };
  }

  findAll() {
    console.log(this.enterpriseList);
    return {
      message: 'Acknowledged, retrieving all enterprises',
      data: this.enterpriseList,
    };
  }

  findOne(id: number) {
    const possibleUser = this.enterpriseList.find((u) => u.id === id);
    if (possibleUser) {
      return {
        message: 'Acknowledged, retrieving enterprise',
        data: possibleUser,
      };
    } else {
      return { message: 'Enterprise not found' };
    }
  }

  update(id: number, updateUserDto: UpdateEnterpriseDto) {
    const possibleUser = this.enterpriseList.find((u) => u.id === id);
    if (possibleUser) {
      // algorithm to update user
      this.enterpriseList = this.enterpriseList.map((u) => {
        if (u.id === id) {
          return { ...u, ...updateUserDto };
        } else {
          return u;
        }
      });

      return { message: 'Acknowledged, Enterprise updated!' };
    } else {
      return { message: 'Enterprise not found' };
    }
  }

  remove(id: number) {
    const possibleUser = this.enterpriseList.find((u) => u.id === id);
    if (possibleUser) {
      this.enterpriseList = this.enterpriseList.filter((u) => u.id !== id);
      return { message: 'Acknowledged, Enterprise removed!' };
    } else {
      return { message: 'Enterprise not found' };
    }
  }
}
