import { Injectable, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AdminsService } from '../../mod-usuarios/admins/admins.service';
import { JwtService } from '@nestjs/jwt';

import { CreateAuthadminDto } from './dto/create-authadmin.dto';

@Injectable()
export class AuthadminService {
  constructor(
    private adminsService: AdminsService,
    private jwtService: JwtService
  ) {}
  
  async signIn(createAdminDto: CreateAuthadminDto): Promise<any> {
    
    const user = await this.adminsService.findUsernameEmail(createAdminDto.username);
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

    // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })

  }
}
