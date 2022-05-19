import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  public mail: string = null;

  constructor(
    private dialogRef: MatDialogRef<CreateContactComponent>,
  ) { }

  public ngOnInit(): void {}

  public onSubmit(): void {
    if(this.mail) {
      this.dialogRef.close({ mail: this.mail });
      return;
    }
    this.dialogRef.close();
  }

  public onReject(): void {
    this.dialogRef.close();
  }

}
