import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthadminDto } from './create-authadmin.dto';

export class UpdateAuthadminDto extends PartialType(CreateAuthadminDto) {}
