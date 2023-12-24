import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { userProviders } from './entities/admin.provider';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AdminsController],
  providers: [
    ...userProviders,
    AdminsService
  ],
})
export class AdminsModule {}
