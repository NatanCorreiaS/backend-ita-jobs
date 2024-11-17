import { PartialType } from '@nestjs/mapped-types';
import { CreateUserJobDto } from './create-user-job.dto';

export class UpdateUserJobDto extends PartialType(CreateUserJobDto) {}
