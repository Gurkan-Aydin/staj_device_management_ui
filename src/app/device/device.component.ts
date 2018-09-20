import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Device} from '../models/device.model';
import {DeviceRepo} from './device.service';
import {UpdateComponent} from './update.component';


@Component({
  templateUrl: './device.component.html',
  providers: [DeviceRepo],
  styleUrls: ['./device.component.css']
})


export class DeviceComponent implements OnInit {


  devices = [];
  displayedColumns = ['action', 'id', 'url', 'type', 'ip'];
  device: Device = new Device();
  deviceTypes = ['gise', 'bariyer', 'parkmatik', 'localServer'];
  filterColumn = 'id';
  page = 0;
  pageSize = 5;
  maxPage = 0;
  filterValue: String;
  statusUrl: String;

  constructor(private router: Router, private deviceRepo: DeviceRepo, public snackBar: MatSnackBar, public dialog: MatDialog) {

  }
  ngOnInit() {
    this.deviceRepo.getDevices(this.page, this.pageSize, '@', this.filterColumn).then( returnData => {
      this.maxPage = returnData['devices']['0']['totalPages'] - 1;
      this.devices = Device.convert(returnData['devices']['0']['content']);
    });
  }

  openDialog(device: Device): void {
    this.device = device;
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: { device: device}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateDevice(result.id, result);
    });
  }


  refresh(): void {
    this.deviceRepo.refresh().then( returnData => {
      this.devices = Device.convert(returnData['devices']['0']['content']);
    });
  }

  deleteDevice(device: Device): void {
    this.deviceRepo.deleteDevice(device.id).then(returnData => {
      this.snackBar.open((device.id + ' is deleted'), 'Undo', {
        duration: 1000,
      });
      this.refresh();
    });
  }

  addDevice(device: Device): void {
    this.deviceRepo.addDevice(device).then(returnData => {
      this.snackBar.open(( ' Device created successfully.'), 'Undo', {
        duration: 1000,
      });
      this.refresh();
    });
  }

  getDeviceListBy(filterValue: String): void {
    if (filterValue === '' || filterValue === undefined) { return; }
    this.filterValue = filterValue;
    this.deviceRepo.getDevices(this.page, this.pageSize, filterValue, this.filterColumn).then( returnData => {
      this.page = 0;
      this.maxPage = 0;
      this.devices = Device.convert(returnData['devices']) ;
    });
  }

  changePage(direction: String): void {
    if ((direction === 'next' && this.maxPage <= this.page) || (direction === 'prev' && this.page < 0)) { return; }
    this.deviceRepo.changePage(direction).then( returnData => {
      this.page = returnData['devices']['0']['number'];
      this.refresh();
    });
  }

  updateDevice(id: number, device: Device) {
    this.deviceRepo.updateDevice(id, device).then( returnData => {
      this.refresh();
    });
  }

}

