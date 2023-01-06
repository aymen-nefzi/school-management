import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablefilter'
})
export class tablefilter implements PipeTransform {

  transform(objs:any, term:any): any {
    if (term === undefined) {
    return objs;
    }
    return objs.filter((obj)=> {
    return ((obj.firstName.toLowerCase().includes(term.toLowerCase()))
||obj.level.includes(term.toLowerCase())||(obj.lastName.toLowerCase().includes(term.toLowerCase()))||(obj.speciality.toLowerCase().includes(term.toLowerCase())));
    })
    }

}