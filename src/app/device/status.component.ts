import {Component, OnInit} from '@angular/core';
import {DeviceRepo} from './device.service';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Status} from '../models/status.model';

@Component({
  templateUrl: './status.component.html',
  providers: [DeviceRepo],
  styleUrls: ['./device.component.css']
})


export class StatusComponent implements OnInit {

  statusColumn = ['status_id', 'temperature', 'open_duration', 'is_open', 'memory', 'cpu', 'device_id', 'requestDate'];
  statuses: Status[];
  page = 0;
  size = 5;
  deviceId: number;
  startDate: Date;
  endDate: Date;
  dates: Date[] = [];

  constructor(private router: Router, private deviceRepo: DeviceRepo, public snackBar: MatSnackBar, private route: ActivatedRoute) {
    this.route.params.subscribe( param =>
       this.deviceId = <number> param['deviceId']);
  }

  ngOnInit(): void {
    this.deviceRepo.getStatuses(this.deviceId, this.page, this.size).then( returnData => {
      if (0 !== Status.convert(returnData).length) {
        this.statuses = Status.convert(returnData); }
    });
  }

  changePage(direction: String): void {
    if (direction === 'prev' && this.page > 0) { this.page--; }
    if (direction === 'next' && this.statuses.length === this.size) { this.page++; }
    this.ngOnInit();
  }

  filterByDate(): void {
    this.dates[0] = this.startDate['value'].toISOString();
    this.deviceRepo.getFilteredStatuses(this.dates, 0, this.size).then( returnData => {
    if (0 !== Status.convert(returnData).length) {
      this.statuses = Status.convert(returnData); }
  });
  }

}
