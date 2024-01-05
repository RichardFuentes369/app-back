import { Injectable, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { UsersService } from '../../mod-usuarios/users/users.service';
import { JwtService } from '@nestjs/jwt';

import { CreateAuthuserDto } from './dto/create-authuser.dto';

@Injectable()
export class AuthuserService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}
  
  async signIn(createAdminDto: CreateAuthuserDto): Promise<any> {
    
      const user = await this.userService.findUsernameEmail(createAdminDto.username);
      if(!user || user == null){
        throw new NotFoundException('User not exist!', { cause: new Error(), description: 'Some error description' })
      }
      if(user.isActive == false){
        throw new NotFoundException('User no is active!', { cause: new Error(), description: 'Some error description' })
      }
      if (user.password !== createAdminDto.pass) {
        throw new UnauthorizedException();
      }

      const payload = { sub: user.id, email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }

    // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })

}