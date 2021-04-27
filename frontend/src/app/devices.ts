export class Devices {
  device_id:number;
  device_name?:string;
  reserved:boolean;
  reservedby?:string;
  device_img?:any;

  constructor() {
    this.device_id = 0,
    this.reserved = false;
  }
}
