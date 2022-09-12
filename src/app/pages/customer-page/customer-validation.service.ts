import { customer } from './customer.model';

export class CustomerValidationService {
  public validateCustomer(c: customer): boolean {
    let instruction = '\nPlease fill in ';
    let fname = 'First name';
    let lname = 'Last name';
    let email = 'Email';
    let phone = 'Phone';
    let field = ' field';

    let errorMessage: string = '';
    errorMessage = !c.first ? `${instruction}  ${fname}  ${field}  ` : '';
    errorMessage += !c.last ? `${instruction}  ${lname}  ${field}  ` : '';
    errorMessage += !c.email ? `${instruction}  ${email}  ${field}  ` : '';
    errorMessage += !c.phone ? `${instruction}  ${phone}  ${field}  ` : '';

    if (errorMessage) {
      alert(errorMessage);
      return false;
    }
    return true;

    // let resultIsInvalid = !!errorMessage ;
    // if (resultIsInvalid) alert(errorMessage);

    //  return   !resultIsInvalid ;
  }
}
