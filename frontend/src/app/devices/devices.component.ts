import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { DevicesService } from './../devices.service';

import { Devices } from './../devices'

import { DeviceService } from './../device.service'




@Component({
  selector: 'app-devices',
  //directives: [HomeComponent],
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices:any
  devicesservice:any
  displayitem:any
  devservice:any

  constructor(private router: Router, service:DevicesService) {

    service.getDevices().subscribe((response:any) => {
      this.devices = response;
      console.log(response);
    });
    this.devicesservice = service;

  }

  ngOnInit(): void {
  }

  reserve(device_id: Number){
    for (var item of this.devices) {
      if (device_id == item.device_id) {
        item.reserved = true;
        item.reservedby = " replace with login user";
      }
    }
  }

  release(device_id: Number) {
    for (var item of this.devices) {
      if (device_id == item.device_id) {
        item.reserved = false;
         item.reservedby = " ";
      }
    }
  }

  displayDetails(device_id: string) {

    const navigationDetails: string[] = ['/device', device_id];
    this.router.navigate(navigationDetails);

}
 addDevice() {
   const navigationDetails: string[] = ['/newdevice'];
   this.router.navigate(navigationDetails);
   return true

 }

}
