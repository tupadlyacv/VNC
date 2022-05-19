import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteMessageComponent } from './delete-message.component';
import { BaseModalModule } from '../../base-modal/base-modal.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DeleteMessageComponent
  ],
  imports: [
    CommonModule,
    BaseModalModule,
    MatButtonModule
  ]
})
export class DeleteMessageModule { }
