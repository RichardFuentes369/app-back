import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { AdminsModule } from './mod-usuarios/admins/admins.module';
import { UsersModule } from './mod-usuarios/users/users.module';

@Module({
  imports: [
    DatabaseModule,
    AdminsModule, 
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
