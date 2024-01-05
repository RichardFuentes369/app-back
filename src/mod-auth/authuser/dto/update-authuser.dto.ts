import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthuserDto } from './create-authuser.dto';

export class UpdateAuthuserDto extends PartialType(CreateAuthuserDto) {}
