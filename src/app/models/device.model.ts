export class Device {

  id: number;
  url: string;
  type: string;
  ip: string;



  static convert(returnData: any) {
    let array : Array<Device>=[];
    for(let item of returnData){
      let device = new Device();
      device.id = item.id;
      device.url = item.url;
      device.type = item.type;
      device.ip = item.ip;
      array.push(device);
    }
    return array;

  }
}
