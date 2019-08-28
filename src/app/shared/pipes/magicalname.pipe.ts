import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'magicalname'
})
export class MagicalnamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value
      .split('')
      .map((char, index) =>
        index % 2 ? char.toUpperCase() : char.toLowerCase()
      )
      .join('');
  }

}
