import { Injectable, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AdminsService } from '../mod-usuarios/admins/admins.service';
import { UsersService } from '../mod-usuarios/users/users.service';
import { JwtService } from '@nestjs/jwt';

import { CreateAuthDto } from './dto/create-auth.dto';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private adminsService: AdminsService,
    private jwtService: JwtService
  ) {}
  
  async signIn(createAuthDto: CreateAuthDto): Promise<any> {
    
    if(createAuthDto.type === 0){
      const user = await this.adminsService.findUsernameEmail(createAuthDto.username);
      if(!user || user == null){
        throw new NotFoundException('User not exist!', { cause: new Error(), description: 'Some error description' })
      }
      if(user.isActive == false){
        throw new NotFoundException('User no is active!', { cause: new Error(), description: 'Some error description' })
      }
      if (user.password !== createAuthDto.pass) {
        throw new UnauthorizedException();
      }

      const payload = { sub: user.id, email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    
    if(createAuthDto.type === 1){
      const user = await this.usersService.findUsernameEmail(createAuthDto.username);
      if(!user || user == null){
        throw new NotFoundException('User not exist!', { cause: new Error(), description: 'Some error description' })
      }
      if(user.isActive == false){
        throw new NotFoundException('User no is active!', { cause: new Error(), description: 'Some error description' })
      }
      if (user.password !== createAuthDto.pass) {
        throw new UnauthorizedException();
      }

      const payload = { sub: user.id, email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }

    throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })

  }

}
