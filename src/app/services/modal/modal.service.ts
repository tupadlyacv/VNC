import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalController: MatDialog) { }

  public createModal(component: ComponentType<any>, data?: any): Observable<any> {
    const modal = this.modalController.open(component, {
      panelClass: 'base-modal',
      data,
    });
    return modal.afterClosed();
  }
}
