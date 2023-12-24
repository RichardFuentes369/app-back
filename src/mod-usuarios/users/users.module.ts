import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { userProviders } from './entities/user.provider';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...userProviders,
    UsersService
  ],
})
export class UsersModule {}
