import { Component, OnInit } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { Contact } from '../../shared/interfaces/contact.interface';
import { ContactsService } from '../../services/contacts/contacts.service';
import { ModalService } from '../../services/modal/modal.service';
import {
  CreateContactComponent
} from '../../shared/components/modals/contacts/create-contact/create-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contacts$: Observable<Contact[]> = null;

  constructor(
    private contactService: ContactsService,
    private modalService: ModalService,
  ) { }

  public ngOnInit(): void {
    this.getAllContacts();
  }

  public createContact(): void {
    this.modalService.createModal(CreateContactComponent)
      .pipe(
        filter(data => !!data),
        tap(data => {
          const stamp: number = Date.now();
          this.contactService.createContact({
            id: stamp,
            mail: data.mail
          })
        }),
      )
      .subscribe(() => this.getAllContacts());
  }

  public deleteContact(contactId: number): void {
    this.contactService.removeContact(contactId);
    this.getAllContacts();
  }

  private getAllContacts(): void {
    this.contacts$ = this.contactService.getAllContacts();
  }

}
