import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMessageComponent } from './create-message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BaseModalModule } from '../../base-modal/base-modal.module';



@NgModule({
  declarations: [
    CreateMessageComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        BaseModalModule,
    ]
})
export class CreateMessageModule { }
