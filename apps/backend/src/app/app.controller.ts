import {Body, Controller, Get, Put} from '@nestjs/common';
import {AppService} from './app.service';
import {SetDto} from "@getstrong/dtos";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('sets')
  getData() {
    return this.appService.getData();
  }

  @Put('updateSet')
  updateSet(@Body() set: SetDto) {
    return this.appService.updateSet(set);
  }
}
