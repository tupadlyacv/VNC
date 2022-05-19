import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteContactComponent>,
  ) { }

  public ngOnInit(): void {}

  public onClose(withResult: boolean = false) {
   this.dialogRef.close(withResult);
  }

}
