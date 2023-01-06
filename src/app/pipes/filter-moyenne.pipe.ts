import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMoyenne'
})
export class FilterMoyennePipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    return value.sort((obj1,obj2)=>{
      let x=obj1.note
      let y=obj2.note
      if (x>y) {
        return -1
      } else {
        return 1
      }
      return 0
    })
  }

}
