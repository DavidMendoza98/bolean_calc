import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){

  };

  public isLoading : boolean = true;
  public current : number = 1;


  ngOnInit(){
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  };
  title = 'booleanCalc';
}
