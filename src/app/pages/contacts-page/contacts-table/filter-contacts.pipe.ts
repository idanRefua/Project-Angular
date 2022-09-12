import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContacts',
})
export class FilterContactsPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!args[0]) {
      return value;
    }
    return value.filter((x) => x.name.indexOf(args[0]) > -1);
  }
}
