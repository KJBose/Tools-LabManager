import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map, filter, switchMap } from 'rxjs/operators';


import { DeviceComponent } from './device/device.component'
import { DevicesService } from './devices.service';

import { Devices } from './devices'


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  devcom:any
  devicesUrl:string = 'http://0.0.0.0:5000';
  device:any;
  errorMessage:any;
  constructor(private router: Router, private http:HttpClient) {}

  getDevice(device_id:any) {
    return this.http.post<Devices>(this.devicesUrl+"/viewdevice", device_id).pipe(map((data: any) => {
       return data;
     }));
  }
}
