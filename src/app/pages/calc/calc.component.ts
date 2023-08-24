import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public numbers: Array< string | number> = [];
  public newInput: number = 0;
  public operator:string = '+';
  public base : string = '2';

  addNumber(){
    this.numbers.push(this.newInput);
    this.newInput = 0;
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
  }

}
