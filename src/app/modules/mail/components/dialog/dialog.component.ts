import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../../../../shared/interfaces/chat.interface';
import { ModalService } from '../../../../services/modal/modal.service';
import { CreateMessageComponent } from '../../../../shared/components/modals/mail/create-message/create-message.component';
import { filter, switchMap, tap } from 'rxjs';
import { MailService } from '../../../../services/mail/mail.service';
import { Message } from '../../../../shared/interfaces/message.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() public chat: Chat;

  constructor(
    private modalService: ModalService,
    private mailService: MailService,
  ) { }

  public ngOnInit(): void {}

  public createMessage(): void {
    this.modalService.createModal(CreateMessageComponent, {...this.chat})
      .pipe(
        filter(msg => !!msg),
        tap(msg => {
          const stamp: number = Date.now();
          const message: Message = {
            text: msg,
            timestamp: stamp,
            id: stamp
          };
          this.mailService.sentMessage(message, this.chat.id);
        }),
        switchMap(() => this.mailService.getChatById(this.chat.id))
      )
      .subscribe(chat => {
        this.chat = chat;
      });
  }

  public deleteMessage(msgId: number): void {
    this.mailService.deleteMessage(msgId, this.chat);
    this.mailService.getChatById(this.chat.id)
      .subscribe(chat => this.chat = chat);
  }

}
