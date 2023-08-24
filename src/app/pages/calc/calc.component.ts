import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';
import { CalcService } from '../../services/calc.service';

@Component({
  selector: 'calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor( private ConversorService:ConversorService,
               private CalcService:CalcService) { }

  ngOnInit(): void {
  }
  public numbers: Array< string | number> = [];
  public newInput: number = 0;
  public operator:string = '+';
  public base : string = '2';
  public resultado : number = -1;

  addNumber(){
    this.numbers.push(this.newInput);
    this.newInput = 0;
  }
  removeNumber(number: string | number){
    var indice = this.numbers.indexOf(number);
    this.numbers.splice(indice, 1);
  }
  calcular(){
    if(this.numbers.length > 0){
      // Convertir los números a decimal
    const decimal_numbers:Array<number> = [];
    for (const number of this.numbers) {
      decimal_numbers.push(<number>this.ConversorService.convert(<number>number,parseInt(this.base),10));
    }

    // Realizar la funcion deseada
    switch (this.operator) {
      case '+':
        const sum = this.CalcService.sum(decimal_numbers);
        this.resultado = <number>this.ConversorService.convert(sum,10,parseInt(this.base));
        break;
      case '-':
        const subtract = this.CalcService.subtract(decimal_numbers);
        this.resultado = <number>this.ConversorService.convert(subtract,10,parseInt(this.base));
        break;
      case '*':
        const multiply = this.CalcService.multiply(decimal_numbers);
        this.resultado = <number>this.ConversorService.convert(multiply,10,parseInt(this.base));
        break;
      case '/':
        const divide = this.CalcService.divide(decimal_numbers);
        this.resultado = <number>this.ConversorService.convert(divide,10,parseInt(this.base));
        break;
    }
    }

  }

  changeInput($event:any){
    if(this.base == '2'){
      const keys = ['0','1'];
      return keys.includes($event.key);
    } else if (this.base == '8'){
      const keys = ['0','1','2','3','4','5','6','7'];
      return keys.includes($event.key);
    
    } else {
      const keys = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','a','b','c','d','e','f'];
      return keys.includes($event.key);     
    }
    
  }

  clean(){
    this.numbers = []
    this.newInput = 0;
    this.resultado = -1;
    this.base = "2";
    this.operator = "+";
  }

}
