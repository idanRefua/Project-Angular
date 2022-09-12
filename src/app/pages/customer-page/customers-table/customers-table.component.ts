import { Component, Input , Output,EventEmitter } from '@angular/core';
import { customer } from '../customer.model';
import { CustomersService } from '../customers.service';
import { DisplayModesEnum } from '../display-modes.enum';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls:['./customers-table.component.css']
})
export class CustomersTableComponent {

  searchFirst: string;
  searchLast: string;
  searchPhone: string;

  get searchParams(){
    return {
      first:this.searchFirst,
      last:this.searchLast,
      phone:this.searchPhone,
    };
  }

  filterCustomer(customer) {

  }

  constructor(private service: CustomersService){}

  @Input() customers:customer[];
  @Output() currentCustomer =  new  EventEmitter();
  @Output() displayMode =  new  EventEmitter();

  displayCustomerDetails(customerToDisplay: customer) {
    this.displayMode.emit (DisplayModesEnum.details);
    this.currentCustomer.emit(customerToDisplay);
  }

  removeCustomer(customerToRemove: customer) {
    if (confirm('Are you sure? ')) {
      this.service.removeCust(customerToRemove);
    }
  }

  editCustomer(customerToEdit: customer) {
    this.displayMode.emit (DisplayModesEnum.edit);
   this.currentCustomer.emit(customerToEdit);
  }

}


