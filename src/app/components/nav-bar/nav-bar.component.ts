import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  public isOpen:boolean=false;
  @Input() current :number = 1;
  @Output() changeCurrent = new EventEmitter<number>;
  ngOnInit(): void {
  }

  emitChangeCurrent(new_current:number){
    this.current = new_current;
    this.isOpen = !this.isOpen;
    this.changeCurrent.emit(new_current);
  }

}
