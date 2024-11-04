import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EnterprisesModule } from './enterprises/enterprises.module';

@Module({
  imports: [UsersModule, EnterprisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
