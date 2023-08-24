import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputValidation'
})
export class InputValidationPipe implements PipeTransform {

  transform(input:string, base:string): string {
    if(base == '2'){
      let result = '';
      for (const x of input) {
        if(parseInt(x) < 2){
          result = result + x;
        }
      }
    }
    return '0';
  }

}
