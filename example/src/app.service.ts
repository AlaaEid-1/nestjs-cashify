import { Inject, Injectable } from '@nestjs/common';
import { Cashify } from 'cashify';
import { CASHIFY, CashifyService } from 'nestjs-cashify';

@Injectable()
export class AppService {

  constructor(
    @Inject(CASHIFY) private cashify: Cashify,
    private cashifyService: CashifyService
  ) {    
    
    // method 1: service method
    const result1 = this.cashifyService.convert(10, {from: 'EUR', to: 'GBP'});
    console.log(result1);

    // method 2: injecting instance of cashify class
    const result2 = this.cashify.convert(10, {from: 'EUR', to: 'GBP'});
    console.log(result2);

    const result3 = this.cashify.convert(10, {from: 'GBP', to: 'EUR'});
    console.log(result3);   
    
    const result4 = this.cashifyService.convert(10, {from: 'GBP', to: 'EUR'});
    console.log(result4);

   const result5 = this.cashifyService.convert(10, {from: 'USD', to: 'EUR'});
    console.log(result5);

    const result6 = this.cashifyService.convert(10, {from: 'EUR', to: 'USD'});
    console.log(result6);

    const result7 = this.cashifyService.convert(10, {from: 'GBP', to: 'USD'});
    console.log(result7);

    const result8 = this.cashifyService.convert(10, {from: 'USD', to: 'GBP'});
    console.log(result8);
  }

  convertEURToGBP(id:number): string {
    const converted= this.cashifyService.convert(id, { from: 'EUR', to: 'GBP' });
    const reusult= new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(converted);
    return reusult;
  }
  convertUSDToGBP(id:number): string {
    const converted= this.cashifyService.convert(id, { from: 'USD', to: 'GBP' });
   const reusult= new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(converted); 
    return reusult;
  }

  convertGBPToUSD(id:number): string {
  const converted= this.cashifyService.convert(id, { from: 'GBP', to: 'USD' });
  const reusult= new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(converted); 
  return reusult;
  }
  convertGBPToEUR(id:number): string {
  const converted= this.cashifyService.convert(id, { from: 'GBP', to: 'EUR' });
  const reusult= new Intl.NumberFormat('en-ER', {style: 'currency', currency: 'EUR'}).format(converted); 
  return reusult;
  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
