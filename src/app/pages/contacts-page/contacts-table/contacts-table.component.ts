import { Component, Input } from '@angular/core';
import { ContactsDataService } from './contacts-data.service';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css'],
})
export class ContactsTableComponent {
  constructor(public dataService: ContactsDataService) {}

  @Input() name: string = '';
}
