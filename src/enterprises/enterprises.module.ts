import { Module } from '@nestjs/common';
import { EnterprisesService } from './enterprises.service';
import { EnterprisesController } from './enterprises.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EnterprisesController],
  providers: [EnterprisesService],
})
export class EnterprisesModule {}
