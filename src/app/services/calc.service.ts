import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  sum(numbers:Array<number>):number{
    let result = 0;
    for (const i of numbers) {
      result = result + i;
    }
    return result
  }

  subtract(numbers:Array<number>):number{
    numbers.sort((a, b) => b - a);
    let result = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
      result = result - numbers[index];
    }
    return result;
  }

  multiply(numbers:Array<number>){
    let result = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
      result = result * numbers[index];
    }
    return result;
  }

  divide(numbers:Array<number>){
    let result = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
      result = result / numbers[index];
    }
    return result;
  }
}
