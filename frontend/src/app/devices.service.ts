import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Devices } from './devices'

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devicesUrl:string = 'http://0.0.0.0:5000/';
  devices = ["device1", "device2", "device3"];
  constructor(private http:HttpClient) {}

  getDevices():Observable<Devices[]> {
  //getDevices() {

    //return this.devices
    return this.http.get<Devices[]>(this.devicesUrl+"/viewlab");
  }
  addDevices() {

  }

  updateDevice() {

  }

  deleteDevice() {

  }
}
