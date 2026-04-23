import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get('convertcurrency/:amount/:from/:to')
    convertcurrency(@Param('amount') amount:string,@Param('from') from:string,@Param('to') to:string):string{
      return this.appService.convertcurrency(Number(amount),from,to);
    }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

