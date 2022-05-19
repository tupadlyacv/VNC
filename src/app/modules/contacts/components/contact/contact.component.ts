import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../../../shared/interfaces/contact.interface';
import { ModalService } from '../../../../services/modal/modal.service';
import {
  ViewContactComponent
} from '../../../../shared/components/modals/contacts/view-contact/view-contact.component';
import {
  DeleteContactComponent
} from '../../../../shared/components/modals/contacts/delete-contact/delete-contact.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() public contact: Contact = null;

  @Output() public deleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(private modalService: ModalService) { }

  public ngOnInit(): void {}

  public viewContact(): void {
    this.modalService.createModal(ViewContactComponent, { ...this.contact });
  }

  public deleteContact(): void {
    this.modalService.createModal(DeleteContactComponent)
      .pipe(filter(data => !!data))
      .subscribe(() =>  this.deleted.emit(this.contact.id));
  }

}
