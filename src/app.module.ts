import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EnterprisesModule } from './enterprises/enterprises.module';
import { UserJobModule } from './user-job/user-job.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, EnterprisesModule, UserJobModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
