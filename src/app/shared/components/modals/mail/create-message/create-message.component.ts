import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Chat } from '../../../../interfaces/chat.interface';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {

  public newMessage: string = null;

  constructor(
    private dialogRef: MatDialogRef<CreateMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Chat,
  ) { }

  public ngOnInit(): void {}

  public onSubmit(): void {
    this.dialogRef.close(this.newMessage);
  }

  public onReject(): void {
    this.dialogRef.close();
  }

}
