import { Module } from '@nestjs/common';
import { UserJobService } from './user-job.service';
import { UserJobController } from './user-job.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserJobController],
  providers: [UserJobService],
})
export class UserJobModule {}
