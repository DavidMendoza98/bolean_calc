import { Injectable } from '@angular/core';
import rules from '../interfaces/rules';

@Injectable({
  providedIn: 'root'
})
export class ReducerService {

  constructor() { }
  test(){
    console.log(rules.r10.identifier);
  }
 
}
