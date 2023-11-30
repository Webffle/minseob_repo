import { Controller, Get, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import { data } from './config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllNotice() {
    throw new UnauthorizedException('현님 hi');
    return data;
  }
}
