import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from '../../../../interfaces/contact.interface';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
  ) { }

  public ngOnInit(): void {}

  public onClose(): void {
    this.dialogRef.close();
  }

}
