import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail/mail.service';
import { filter, Observable, take, tap } from 'rxjs';
import { Chat } from '../../shared/interfaces/chat.interface';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../services/modal/modal.service';
import { CreateDialogComponent } from '../../shared/components/modals/mail/create-dialog/create-dialog.component';
import { Message } from '../../shared/interfaces/message.interface';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  public chats$: Observable<Chat[]> = null;
  public pickedChat: Chat = null;

  constructor(
    private mailService: MailService,
    private route: ActivatedRoute,
    private modalService: ModalService,
  ) { }

  public ngOnInit(): void {
    this.getAllChats();
  }

  public pickChat(pickedChat: Chat): void {
    this.pickedChat = pickedChat;
  }

  public createDialog(): void {
    this.modalService.createModal(CreateDialogComponent)
      .pipe(
        filter(data => !!data),
        tap(data => {
          console.log(data)
          const stamp: number = Date.now();
          const message: Message = {
            id: stamp,
            timestamp: stamp,
            text: data.message,
          };
          this.mailService.createChat({
            id: stamp,
            from: data.from,
            messages: [message],
            fromId: stamp,
          })
        }),
      )
      .subscribe(() => this.getAllChats());
  }

  public deleteDialog(chatId: number): void {
    this.mailService.removeChat(chatId);
    this.getAllChats();
  }

  private getAllChats(): void {
    this.chats$ = this.mailService.getAllChats()
      .pipe(
        take(1),
        tap(chats => this.pickedChat = chats.find(chat => chat.id == this.route.snapshot.queryParams['id'])),
      );
  }

}
