import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteContactComponent } from './delete-contact.component';
import { BaseModalModule } from '../../base-modal/base-modal.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DeleteContactComponent
  ],
  imports: [
    CommonModule,
    BaseModalModule,
    MatButtonModule
  ]
})
export class DeleteContactModule { }
