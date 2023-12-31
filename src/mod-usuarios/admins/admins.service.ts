import { Inject, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @Inject('ADMIN_REPOSITORY')
    private adminRepository: Repository<Admin>,
  ) {}

  create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.save(createAdminDto);
  }

  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  findOne(id: number) {
    return this.adminRepository.findOne({
      where: [ {id : id}],
      order: { id: 'DESC' }
    });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const property = await this.adminRepository.findOne({
      where: { id }
    });
    
    return this.adminRepository.save({
      ...property, // existing fields
      ...updateAdminDto // updated fields
    });
  }

  remove(id: number) {
    return this.adminRepository.delete(id);
  }

  async findUsernameEmail(username: string): Promise<Admin>{
    return this.adminRepository.findOne({
      where: [ {email : username}]
    });
  }
}
