import { Injectable } from '@angular/core';
import { CacheService } from '../cache/cache.service';
import { Observable, of } from 'rxjs';
import { Chat } from '../../shared/interfaces/chat.interface';
import { Message } from '../../shared/interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private cacheService: CacheService,
  ) { }

  public getAllChats(): Observable<Chat[]> {
    return of(this.cacheService.getStorageChats());
  }

  public getChatById(id: number): Observable<Chat> {
    const chats = this.cacheService.getStorageChats();
    return of(chats.find(chat => chat.id === id));
  }

  public sentMessage(message: Message, chatId: number): void {
    this.cacheService.addMessageToChat(message, chatId);
  }

  public deleteMessage(messageId: number, chat: Chat): void {
    this.cacheService.removeMessageFromChat(messageId, chat.id);
  }

  public createChat(chat: Chat): void {
    this.cacheService.createChat(chat);
  }

  public removeChat(chatId: number): void {
    this.cacheService.removeChat(chatId);
  }
}
