import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog.component';
import { BaseModalModule } from '../../base-modal/base-modal.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    BaseModalModule,
    MatButtonModule
  ]
})
export class DeleteDialogModule { }
