import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unicornify'
})
export class UnicornifyPipe implements PipeTransform {
  transform(value: string, encapsulated: boolean = false, count: number = 1): any {
    console.count('unicornify');
    const unicorn = '🦄'.repeat(count);
    return encapsulated
      ? `${unicorn} ${value} ${unicorn}`
      : `${value} ${unicorn}`;
  }
}
