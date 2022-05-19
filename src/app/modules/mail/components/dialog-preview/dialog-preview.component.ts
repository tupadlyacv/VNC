import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chat } from '../../../../shared/interfaces/chat.interface';
import { Router } from '@angular/router';
import { ModalService } from '../../../../services/modal/modal.service';
import { DeleteDialogComponent } from '../../../../shared/components/modals/mail/delete-dialog/delete-dialog.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dialog-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.scss']
})
export class DialogPreviewComponent implements OnInit {

  @Input() public chat: Chat;
  @Output() public picked: EventEmitter<Chat> = new EventEmitter<Chat>();
  @Output() public deleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router,
    private modalService: ModalService,
  ) { }

  public ngOnInit(): void {}

  public navigateToChat(): void {
    this.picked.emit(this.chat);
    this.router.navigate(['mail/dialog'], {queryParams: { id: this.chat.id }});
  }

  public deleteChat(event: Event): void {
    event.stopImmediatePropagation();
    this.modalService.createModal(DeleteDialogComponent)
      .pipe(filter(data => !!data))
      .subscribe(() => this.deleted.emit(this.chat.id))
  }

}
