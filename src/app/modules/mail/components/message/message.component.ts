import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../../../../shared/interfaces/message.interface';
import { ModalService } from '../../../../services/modal/modal.service';
import { DeleteMessageComponent } from '../../../../shared/components/modals/mail/delete-message/delete-message.component';
import { filter } from 'rxjs';
import { ViewMessageComponent } from '../../../../shared/components/modals/mail/view-message/view-message.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() public message: Message;

  @Output() public deleteMsg: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private modalService: ModalService,
  ) { }

  public ngOnInit(): void {}

  public viewMessage(): void {
    this.modalService.createModal(ViewMessageComponent, {...this.message});
  }

  public deleteMessage(): void {
    this.modalService.createModal(DeleteMessageComponent)
      .pipe(filter(isSubmit => !!isSubmit))
      .subscribe(() => this.deleteMsg.emit(this.message.id));
  }

}
