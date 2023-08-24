import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reducer',
  templateUrl: './reducer.component.html',
  styleUrls: ['./reducer.component.css']
})
export class ReducerComponent implements OnInit {

  constructor() { }

  public expression:string = '';

  ngOnInit(): void {
  }

}
