import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalComponent } from './base-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    BaseModalComponent
  ],
  exports: [
    BaseModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class BaseModalModule { }
