import { Component, OnInit } from '@angular/core';
import { DevicesService } from './../devices.service';

import { Devices } from './../devices'
import { DevicesComponent } from './../devices/devices.component'

import { DeviceService } from './../device.service'
import { HomeService } from './../home.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //devobj = new DevicesComponent(Router);
  //devices = this.devobj.devices;
  summary: any;
  constructor(service:HomeService) {
    service.getSummary().subscribe((response:any) => {
      this.summary = response;
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
