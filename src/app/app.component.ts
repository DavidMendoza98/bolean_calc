import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){

  };

  public isLoading : boolean = false;
  public current : number = 3;


  ngOnInit(){
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  };
  title = 'booleanCalc';
}
