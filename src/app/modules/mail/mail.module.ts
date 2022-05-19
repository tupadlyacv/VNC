import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogPreviewComponent } from './components/dialog-preview/dialog-preview.component';
import { MessageComponent } from './components/message/message.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateMessageModule } from '../../shared/components/modals/mail/create-message/create-message.module';
import { ViewMessageModule } from '../../shared/components/modals/mail/view-message/view-message.module';
import { DeleteMessageModule } from '../../shared/components/modals/mail/delete-message/delete-message.module';
import { CreateDialogModule } from '../../shared/components/modals/mail/create-dialog/create-dialog.module';
import { DeleteDialogModule } from '../../shared/components/modals/mail/delete-dialog/delete-dialog.module';


@NgModule({
  declarations: [
    MailComponent,
    DialogComponent,
    DialogPreviewComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    MatButtonModule,
    CreateMessageModule,
    ViewMessageModule,
    DeleteMessageModule,
    CreateDialogModule,
    DeleteDialogModule,
  ],
})
export class MailModule { }
