import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor() { }

  public convert(numberToConvert: number, originBase: number, targetBase: number) {
    // De Binario a los demás
    if (originBase == 2 && targetBase == 10) {

      return this.binaryToDecimal(numberToConvert);

    } else if (originBase == 2 && targetBase == 8) {

      return this.binaryToOctal(numberToConvert);

    } else if (originBase == 2 && targetBase == 16) {

      return this.binaryToHexadecimal(numberToConvert);
    
    // De Octal a los demás
    } else if (originBase == 8 && targetBase == 2) {

      return this.octalToBinary(numberToConvert);

    } else if (originBase == 8 && targetBase == 10) {

      return this.octalToDecimal(numberToConvert);

    } else if (originBase == 8 && targetBase == 16) {

      return this.octalToHexadecimal(numberToConvert);

    // De Decimal a los demás
    } else if (originBase == 10 && targetBase == 2) {

      return this.decimalToBinary(numberToConvert);

    } else if (originBase == 10 && targetBase == 8) {

      return this.decimalToOctal(numberToConvert);

    } else if (originBase == 10 && targetBase == 16) {

      return this.decimalToHexadecimal(numberToConvert);

    // De Hexa a los demás
    } else if (originBase == 16 && targetBase == 2) {

      return this.hexadecimalToBinary(numberToConvert);

    } else if (originBase == 16 && targetBase == 8) {

      return this.hexadecimalToOctal(numberToConvert);

    } else if(originBase == 16 && targetBase == 10) {

      return this.hexadecimalToDecimal(numberToConvert);

    // Tp obliga que haya posibilidad de un return
    } else {
      return 0;
    }
  }

  private binaryToDecimal(numberToConvert: number): number {
    return parseInt(numberToConvert.toString(),2);
  }
  private binaryToOctal(numberToConvert: number): number {
    return parseInt(this.binaryToDecimal(numberToConvert).toString(8));
  }
  private binaryToHexadecimal(numberToConvert: number): string {
    return this.binaryToDecimal(numberToConvert).toString(16);
  }

  private octalToBinary(numberToConvert: number): number {
    return parseInt(this.octalToDecimal(numberToConvert).toString(2));
  }
  private octalToDecimal(numberToConvert: number): number {
    return parseInt(numberToConvert.toString(),8);
  }
  private octalToHexadecimal(numberToConvert: number): string {
    return this.octalToDecimal(numberToConvert).toString(16);
  }

  private hexadecimalToBinary(numberToConvert: number): number {
    return parseInt(this.hexadecimalToDecimal(numberToConvert).toString(2));
  }
  private hexadecimalToDecimal(numberToConvert: number): number {
    return parseInt(numberToConvert.toString(),16);
  }
  private hexadecimalToOctal(numberToConvert: number): number {
    return parseInt(this.hexadecimalToDecimal(numberToConvert).toString(8));
  }

  private decimalToBinary(numberToConvert: number): number | string{
    const number = parseInt(numberToConvert.toString());
    return number.toString(2);
  }
  private decimalToHexadecimal(numberToConvert: number): number | string {
    const number = parseInt(numberToConvert.toString());
    return number.toString(16)
  }
  private decimalToOctal(numberToConvert: number): number | string {
    const number = parseInt(numberToConvert.toString());
    return number.toString(8);
  }
}
