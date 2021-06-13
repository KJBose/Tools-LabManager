import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DeviceService } from './../device.service';

import { Devices } from './../devices'

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device:any;
  deviceService:any;
  device_id:any;
  deviceRoute:any;
  errorMessage:any;

  constructor(private router: Router, private route: ActivatedRoute, service:DeviceService) {

    this.deviceService = service
    this.deviceRoute = route


    this.device_id = this.deviceRoute.snapshot.paramMap.get('id')

    service.getDevice(this.device_id).subscribe((response:any) => {
      this.device = response;
    });


    //alert("alert 2 evice is" + this.device.device_name)


  }

  ngOnInit(): void {

  }

  public updateDeviceDetails(item: Devices) {
    this.device = item;

  }

  public displayDevice(item: any) {
    alert("emitted item collected")
    this.device = this.deviceService.getDevice(item)
    const navigationDetails: string[] = ['/device'];
    this.router.navigate(navigationDetails);
    return true
  }

}
