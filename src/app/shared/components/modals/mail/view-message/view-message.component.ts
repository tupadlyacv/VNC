import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Message } from '../../../../interfaces/message.interface';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.scss']
})
export class ViewMessageComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Message,
  ) { }

  public ngOnInit(): void {}

  public onClose(): void {
    this.dialogRef.close();
  }

}
