import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthadminService } from './authadmin.service';
import { CreateAuthadminDto } from './dto/create-authadmin.dto';
import { UpdateAuthadminDto } from './dto/update-authadmin.dto';

@Controller('authadmin')
export class AuthadminController {
  constructor(private readonly authadminService: AuthadminService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  create(@Body() createAuthDto: CreateAuthadminDto) {
    return this.authadminService.signIn(createAuthDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
