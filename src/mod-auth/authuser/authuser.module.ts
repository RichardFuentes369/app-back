import { Module } from '@nestjs/common';
import { AuthuserService } from './authuser.service';
import { AuthuserController } from './authuser.controller';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constante';

import { UsersModule } from 'src/mod-usuarios/users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secretUser,
      signOptions: { expiresIn: '365d' },
    }),
  ],
  controllers: [AuthuserController],
  providers: [AuthuserService],
  exports: [AuthuserService],
})
export class AuthuserModule {}
