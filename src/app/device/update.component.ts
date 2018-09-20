import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Device} from '../models/device.model';
import { NgModule } from '@angular/core';
import {a} from '@angular/core/src/render3';



@Component({
  templateUrl: './update.component.html',
})
export class UpdateComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device) {
  }
  deviceTypes = ['gise', 'bariyer', 'parkmatik', 'localServer'];
  nextDevice = new Device();
  deviceType = 'asd';

  onNoClick(): void {
    debugger;
    this.nextDevice.id = this.data['device'].id;
    this.dialogRef.close(this.nextDevice);
  }
}
