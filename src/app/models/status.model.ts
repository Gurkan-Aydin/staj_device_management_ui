import {Device} from './device.model';

export class Status {

  statusId: String;
  temperature: number;
  openDuration: number;
  isOpen: boolean;
  memory: number;
  cpu: number;
  deviceId: number;
  requestDate = new Date();



  static convert(returnData: any) {
    let array: Array<Status> = [];
    for (let item of returnData) {
      let status = new Status();
      status.statusId = item.statusId;
      status.temperature = item.temperature;
      status.openDuration = item.openDuration;
      status.isOpen = item.isOpen;
      status.memory = item.memory;
      status.cpu = item.cpu;
      status.deviceId = item.deviceId;
      status.requestDate = item.requestDate;
      array.push(status);
    }
    return array;
  }

}
