import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.scss']
})
export class DeleteMessageComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteMessageComponent>,
  ) { }

  public ngOnInit(): void {}

  public onSubmit(): void {
    this.dialogRef.close(true);
  }

  public onReject(): void {
    this.dialogRef.close();
  }

}
