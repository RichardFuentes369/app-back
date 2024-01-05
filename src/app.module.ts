import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { AdminsModule } from './mod-usuarios/admins/admins.module';
import { UsersModule } from './mod-usuarios/users/users.module';
import { AuthadminModule } from './mod-auth/authadmin/authadmin.module';
import { AuthuserModule } from './mod-auth/authuser/authuser.module';

@Module({
  imports: [
    DatabaseModule,
    AdminsModule, 
    UsersModule, 
    AuthadminModule, 
    AuthuserModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
