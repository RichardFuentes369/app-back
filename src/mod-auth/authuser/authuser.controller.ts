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
import { AuthuserService } from './authuser.service';
import { CreateAuthuserDto } from './dto/create-authuser.dto';
import { UpdateAuthuserDto } from './dto/update-authuser.dto';

@Controller('authuser')
export class AuthuserController {
  constructor(private readonly authuserService: AuthuserService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  create(@Body() createAuthDto: CreateAuthuserDto) {
    return this.authuserService.signIn(createAuthDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
