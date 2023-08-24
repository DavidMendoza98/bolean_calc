import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @Output() changeCurrent = new EventEmitter<number>;
  ngOnInit(): void {
  }

  emitChangeCurrent(new_current:number){
    this.changeCurrent.emit(new_current);
  }

}
