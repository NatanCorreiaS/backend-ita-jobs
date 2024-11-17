import { Module } from '@nestjs/common';
import { UserJobService } from './user-job.service';
import { UserJobController } from './user-job.controller';

@Module({
  controllers: [UserJobController],
  providers: [UserJobService],
})
export class UserJobModule {}
