import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMessageComponent } from './view-message.component';
import { BaseModalModule } from '../../base-modal/base-modal.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ViewMessageComponent
  ],
  imports: [
    CommonModule,
    BaseModalModule,
    MatButtonModule
  ]
})
export class ViewMessageModule { }
