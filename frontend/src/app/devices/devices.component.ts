import { Component, OnInit } from '@angular/core';

import { DevicesService } from './../devices.service';

import { Devices } from './../devices'


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices:Devices[];
  //devices:any
  constructor(service:DevicesService) {
    //this.devices = service.getDevices()
    this.devices = [
      {
        device_id : 1,
        device_name : "device1",
        device_img : "test",
        reserved : true,
        reservedby : "Bose"

      },
      {

        device_id : 2,
        device_name : "device2",
        device_img : "test",
        reserved : true,
        reservedby : "Ram"

      }]


  }


  ngOnInit(): void {
  }

}
