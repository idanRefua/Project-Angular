import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ContactsDataService {
  allContacts: any;
  constructor(db: AngularFireDatabase) {
    db.list('/contacts')
      .snapshotChanges()
      .subscribe((contacts) => {
        this.allContacts = contacts.map((x) => {
          let newItem = x.payload.val();
          return newItem;
        });
      });
  }
}
