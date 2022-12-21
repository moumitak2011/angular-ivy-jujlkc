import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value);
    return `${value.street}, ${value.suite}, ${value.city} ${value.zipcode}`;
  }
}
