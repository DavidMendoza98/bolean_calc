import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../../services/conversor.service';

@Component({
  selector: 'conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  // Constructor con la inyección del servicio del conversor
  constructor(
    private ConversorService:ConversorService
  ) { }
  // Variables necesarias
  public numberToConvert:number = 0;
  public baseOrigin:number = 8; // permite manipular objetos { value:'Decimal', base:10}
  public baseTarget:number = 2; // permite manipular objetos { value:'Decimal', base:10}
  public resultado:string = '0';
  public options = [
    { value:'Binario', base:2},
    { value:'Decimal', base:10},
    { value:'Octal', base:8},
    { value:'Hexadecimal', base:16},
  ]

  ngOnInit(): void {
  }

  convert(){
    const convert = (<number>this.ConversorService.convert(this.numberToConvert,this.baseOrigin,this.baseTarget)).toString();
    this.resultado = <string>this.formatUppercase(convert);
  }
  clean(){
    this.resultado = '0';
    this.numberToConvert = 0;
    this.baseOrigin = 2;
    this.baseTarget = 10;
  }
  formatUppercase(value:string){
    if(this.baseTarget==16){
      return value.toUpperCase();
    } else {
      return value;
    }
  }
  changeInput($event:any){
    if(this.baseOrigin == 2){
      const keys = ['0','1'];
      return keys.includes($event.key);
    } else if (this.baseOrigin == 8){
      const keys = ['0','1','2','3','4','5','6','7'];
      return keys.includes($event.key);
    } else if (this.baseOrigin == 10){
      const keys = ['0','1','2','3','4','5','6','7','8','9'];
      return keys.includes($event.key); 
    } else {
      const keys = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','a','b','c','d','e','f'];
      return keys.includes($event.key);     
    }
    
  }
}
