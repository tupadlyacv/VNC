import { Injectable } from '@angular/core';
import { CacheService } from '../cache/cache.service';
import { Observable, of } from 'rxjs';
import { Contact } from '../../shared/interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private cacheService: CacheService) { }

  public getAllContacts(): Observable<Contact[]> {
    return of(this.cacheService.getStorageContacts());
  }

  public createContact(contact: Contact): void {
    this.cacheService.createContact(contact);
  }

  public removeContact(contactId: number): void {
    this.cacheService.removeContact(contactId);
  }
}
