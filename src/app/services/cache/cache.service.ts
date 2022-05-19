import { Injectable } from '@angular/core';
import { MOCKED_INITIAL_CHATS } from '../../shared/mocks/initial-chats.mock';
import { Message } from '../../shared/interfaces/message.interface';
import { Chat } from '../../shared/interfaces/chat.interface';
import { MOCKED_INITIAL_CONTACTS } from '../../shared/mocks/initial-contacts.mock';
import { Contact } from '../../shared/interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private readonly LOCAL_STORAGE_KEY: string = 'testVcs';
  private readonly LOCAL_STORAGE_CHAT_KEY: string = 'chats';
  private readonly LOCAL_STORAGE_CONTACTS_KEY: string = 'contacts';

  private localStorage: Storage = localStorage;

  constructor() {
    this.setInitialsData();
  }

  public addMessageToChat(message: Message, chatId: number): void {
    const chats: Chat[] = this.getStorageChats();
    const searchedChat: Chat = chats?.find(chat => chat.id === chatId);
    if(searchedChat) {
      searchedChat.messages = [...searchedChat.messages, message];
      this.setStorageChats(chats);
    }
  }

  public removeMessageFromChat(messageId: number, chatId: number): void {
    const chats: Chat[] = this.getStorageChats();
    const searchedChat: Chat = chats?.find(chat => chat.id === chatId);
    if(searchedChat) {
      const msgIndex: number = searchedChat.messages.findIndex(message => message.id === messageId);
      searchedChat.messages.splice(msgIndex, 1);
      this.setStorageChats(chats);
    }
  }

  public getStorageChats(): Chat[] {
    const storage = JSON.parse(this.localStorage.getItem(this.LOCAL_STORAGE_KEY));
    return storage ? storage[this.LOCAL_STORAGE_CHAT_KEY] : null;
  }

  public getStorageContacts(): Contact[] {
    const storage = JSON.parse(this.localStorage.getItem(this.LOCAL_STORAGE_KEY));
    return storage ? storage[this.LOCAL_STORAGE_CONTACTS_KEY] : null;
  }

  public createChat(chat: Chat): void {
    const chats = this.getStorageChats();
    this.setStorageChats([...chats, chat]);
  }

  public createContact(contact: Contact): void {
    const contacts = this.getStorageContacts();
    this.setStorageContacts([...contacts, contact]);
  }

  public removeChat(chatId: number): void {
    const chats = this.getStorageChats();
    const index = chats.findIndex(chat => chat.id === chatId);
    chats.splice(index, 1);
    this.setStorageChats(chats);
  }

  public removeContact(contactId: number): void {
    const contacts = this.getStorageContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    contacts.splice(index, 1);
    this.setStorageContacts(contacts);
  }

  private setInitialsData(): void {
    this.setInitialChats();
    this.setInitialContacts()
  }

  private setInitialChats(): void {
    if(!this.getStorageChats()) {
      this.setStorageChats(MOCKED_INITIAL_CHATS);
    }
  }

  private setInitialContacts(): void {
    if(!this.getStorageContacts()) {
      this.setStorageContacts(MOCKED_INITIAL_CONTACTS);
    }
  }

  private setStorageChats(chats: Chat[]): void {
    this.localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify({[this.LOCAL_STORAGE_CHAT_KEY]: chats}));
  }

  private setStorageContacts(contacts: Contact[]): void {
    const chats = this.getStorageChats();
    this.localStorage.setItem(this.LOCAL_STORAGE_KEY,
      JSON.stringify({
        [this.LOCAL_STORAGE_CONTACTS_KEY]: contacts,
        [this.LOCAL_STORAGE_CHAT_KEY]: chats,
      })
    );
  }
}
