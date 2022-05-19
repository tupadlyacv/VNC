import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from './components/contact/contact.component';
import { CreateContactModule } from '../../shared/components/modals/contacts/create-contact/create-contact.module';
import { DeleteContactModule } from '../../shared/components/modals/contacts/delete-contact/delete-contact.module';
import { ViewContactModule } from '../../shared/components/modals/contacts/view-contact/view-contact.module';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MatButtonModule,
    CreateContactModule,
    DeleteContactModule,
    ViewContactModule,
  ]
})
export class ContactsModule { }
