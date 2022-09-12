import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerPageComponent } from '../pages/customer-page/customer-page.component';
import { AddEditDisplayCustomerComponent } from '../pages/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { ContactsPageComponent } from '../pages/contacts-page/contacts-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

import { RoutingModule } from '../modules/routing.module';
import { FirebaseModule } from '../modules/firebase.module';
import { LayoutComponent } from '../pages/layout/layout.component';
import { CustomersTableComponent } from '../pages/customer-page/customers-table/customers-table.component';
import { CustomersTableIcons } from '../pages/customer-page/customers-table/customers-table-icons.component';
import { CustomersPipe } from '../pages/customer-page/customers-table/customers.pipe';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ContactsTableComponent } from '../pages/contacts-page/contacts-table/contacts-table.component';
import { FilterContactsPipe } from '../pages/contacts-page/contacts-table/filter-contacts.pipe';
import { CustomerValidationService } from '../pages/customer-page/customer-validation.service';

@NgModule({
  imports: [RoutingModule, FirebaseModule, BrowserModule, FormsModule],
  declarations: [
    CustomersTableIcons,
    LayoutComponent,
    AppComponent,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent,
    CustomersTableComponent,
    CustomersPipe,
    AboutPageComponent,
    ContactsTableComponent,
    FilterContactsPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
