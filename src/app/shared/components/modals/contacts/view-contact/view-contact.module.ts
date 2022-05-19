import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContactComponent } from './view-contact.component';
import { BaseModalModule } from '../../base-modal/base-modal.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ViewContactComponent
  ],
  imports: [
    CommonModule,
    BaseModalModule,
    MatButtonModule
  ]
})
export class ViewContactModule { }
