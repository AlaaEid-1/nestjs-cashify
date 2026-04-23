import { Inject, Injectable } from '@nestjs/common';
import { Cashify } from 'cashify';
import { CASHIFY, CashifyService } from 'nestjs-cashify';

@Injectable()
export class AppService {
private symbols: Record<string,string>={
      GBP: '£',
      EUR: '€',
      USD: '$'
};
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
  }
   convertcurrency(amount:number,from:string,to:string):string{
    const converted = this.cashifyService.convert(amount, {from: from.toUpperCase(), to: to.toUpperCase()});
    const symbol=this.symbols[to.toUpperCase()];
    if(symbol){
      return symbol + converted.toFixed(2);
    }
    return converted.toFixed(2);
   }
  getHello(): string {
    return 'Hello World!';
  }
}





