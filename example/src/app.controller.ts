import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('convertEURToGBP/:id')
  getresult(@Param('id') id:number): string {
    return this.appService.convertEURToGBP(id);
  }
  //https://www.npmjs.com/package/cashify?activeTab=readme#formatting-with-intlnumberformat
 @Get('convertUSDToGBP/:id')
  getresultUSDTOGBP(@Param('id') id:number): string {
    return this.appService.convertUSDToGBP(id);
  }
@Get('convertGBPToUSD/:id')
  convertGBPToUSD(@Param('id') id:number): string {
    return this.appService.convertGBPToUSD(id);
  }
  @Get('convertGBPToEUR/:id')
  convertGBPToEUR(@Param('id') id:number): string {
    return this.appService.convertGBPToEUR(id);
  }
}
