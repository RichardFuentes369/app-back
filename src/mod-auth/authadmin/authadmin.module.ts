import { Module } from '@nestjs/common';
import { AuthadminService } from './authadmin.service';
import { AuthadminController } from './authadmin.controller';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constante';

import { AdminsModule } from 'src/mod-usuarios/admins/admins.module';

@Module({
  imports: [
    AdminsModule, 
    JwtModule.register({
      global: true,
      secret: jwtConstants.secretAdmin,
      signOptions: { expiresIn: '365d' },
    }),
  ],
  controllers: [AuthadminController],
  providers: [AuthadminService],
  exports: [AuthadminService],
})
export class AuthadminModule {}
