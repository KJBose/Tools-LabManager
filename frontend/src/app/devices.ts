export class Devices {
  device_id:number;
  device_name?:string;
  device_type:string;
  reserved:boolean;
  reservedby:string;
  device_img?:any;
  ownedby:string;

  constructor() {
    this.device_id = 0,
    this.reserved = false;
    this.device_type = "UCS";
    this.reservedby = "Bose";
    this.ownedby = "NCS_FT"
  }
}
