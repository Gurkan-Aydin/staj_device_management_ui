import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PageEvent} from '@angular/material';
import {Device} from '../models/device.model';
import { Status} from '../models/status.model';
import {a} from '@angular/core/src/render3';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DeviceRepo {

  constructor(private http: HttpClient) {
  }

  private deviceUrl = 'http://localhost:8080/devicestracingsystem/';
  private statusUrl = 'http://localhost:8080/devicestracingsystem/status/';

  public deleteDevice(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.deviceUrl + '/delete/' + id).subscribe(returnData => {
        resolve(returnData);
      }, error => {
        reject(error);
      });
    });
  }

  public addDevice(device): Promise<any> {
    return new Promise((resolve, reject) => {
    this.http.post<Device>(this.deviceUrl + '/add', device).subscribe(returnData => {
      resolve(returnData);
    }, error => {
      reject(error);
    });
  });
  }

  public refresh(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.deviceUrl + 'refresh/').subscribe(returnData => {
        resolve(returnData);
      }, error => {
        debugger;
        reject(error);
      });
    });
  }

  public getDevices(page: number, size: number, filterValue: String, filterColumn: String): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.deviceUrl + 'get/' + filterValue + '/' + page + '/' + size , filterColumn).subscribe(returnData => {
        resolve(returnData);
      }, error => {
        alert('Please enter number');
        reject(error);
      });
    });
  }

  public updateDevice(id: number, device: Device): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.deviceUrl + 'update/' + id , device).subscribe(returnData => {
        resolve(returnData);
      }, error => {
        debugger;
        reject(error);
      });
    });
  }

  public changePage(direction: String): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.deviceUrl + 'changePage/' + direction).subscribe(returnData => {
        resolve(returnData);
      }, error => {
        reject(error);
      });
    });
  }

  public getStatuses(deviceId: number, page: number, size: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.statusUrl + 'get/' + deviceId + '/' + page + '/' + size).subscribe(returnData => {
        resolve(returnData);
      }, error => {
        reject(error);
      });
    });
  }

  public getFilteredStatuses(dates: Date[], page: number, size: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.statusUrl + 'filterByDate/' + page + '/' + size, dates).subscribe(returnData => {
        resolve(returnData);
      }, error => {
        reject(error);
      });
    });
  }


}
