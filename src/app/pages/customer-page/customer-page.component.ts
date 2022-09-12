import { Component } from '@angular/core';
import { customer } from './customer.model';
import { DisplayModesEnum } from './display-modes.enum';
import { CustomersService } from './customers.service';
import { CustomerValidationService } from './customer-validation.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
})
export class CustomerPageComponent {
  DisplayModes = DisplayModesEnum;

  currentCustomer: customer;
  setCurrentCustomer(c: customer) {
    this.currentCustomer = c;
  }

  displayMode: DisplayModesEnum = DisplayModesEnum.table;
  setDisplayMode(d: DisplayModesEnum) {
    this.displayMode = d;
  }

  customers: customer[];
  createCustomer() {
    let isValidCust = this.validateCustService.validateCustomer(
      this.currentCustomer
    );

    if (isValidCust) {
      this.service.addCustomer(this.currentCustomer);
      this.displayMode = DisplayModesEnum.table;
    }
  }

  updateCustomer() {
    let isValidCust = this.validateCustService.validateCustomer(
      this.currentCustomer
    );
    if (isValidCust) {
      this.service.updateCustomer(this.currentCustomer);
      this.displayMode = DisplayModesEnum.table;
    }
  }

  addCustomer() {
    this.currentCustomer = new customer();
    this.displayMode = DisplayModesEnum.add;
  }
  constructor(
    private service: CustomersService,
    private validateCustService: CustomerValidationService
  ) {
    service.getCustomers((data) => {
      this.customers = data;
    });
  }
}
