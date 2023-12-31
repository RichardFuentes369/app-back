import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AdminsModule } from 'src/mod-usuarios/admins/admins.module';
import { UsersModule } from 'src/mod-usuarios/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    AdminsModule, 
    UsersModule,
    JwtModule.register({
      global: true,
      secret: '123456789',
      signOptions: { expiresIn: '60s' },
    }),
  ]
})
export class AuthModule {}
