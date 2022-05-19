import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

  public chatWith: string = null;
  public firstMessage: string = null;

  constructor(
    private dialogRef: MatDialogRef<CreateDialogComponent>,
  ) { }

  public ngOnInit(): void {}

  public onSubmit(): void {
    if(this.chatWith && this.firstMessage) {
      this.dialogRef.close({ from: this.chatWith, message: this.firstMessage });
      return;
    }
    this.dialogRef.close();
  }

  public onReject(): void {
    this.dialogRef.close();
  }

}
