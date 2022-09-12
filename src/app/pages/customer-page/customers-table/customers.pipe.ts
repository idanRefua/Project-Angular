import { Pipe, PipeTransform } from '@angular/core';
import { customer } from '../customer.model';

@Pipe({
  name: 'customersPipe'
})
export class CustomersPipe implements PipeTransform {
  transform(value: customer[],args): any {
   
    return value.filter((cust:customer)=>{
      return !(
        NotMatch(args.first, cust.first) ||
        NotMatch(args.last, cust.last) ||
        NotMatch(args.phone, cust.phone)
      );
  
      function NotMatch(
        textFromFilerTextBox: string,
        dataFromCustomerObject: string
      ) {
        return (
          textFromFilerTextBox &&
          dataFromCustomerObject.indexOf(textFromFilerTextBox) == -1
        );
      }
    });
  }
}
