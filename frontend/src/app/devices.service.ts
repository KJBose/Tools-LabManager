import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map, filter, switchMap } from 'rxjs/operators';
import { Devices } from './devices'

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devicesUrl:string = 'http://0.0.0.0:5000';
  devices = ["device1", "device2", "device3"];
  postId:any;
  errorMessage:any;
  constructor(private http:HttpClient) {}

  getDevices() {
    return this.http.get(this.devicesUrl+"/viewlab").pipe(map((data: any) => {
      return data;

    }));
  }

  updateDevice() {

  }

  deleteDevice() {

  }
}
