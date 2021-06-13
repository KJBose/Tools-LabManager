import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Devices } from './devices'

@Injectable({
  providedIn: 'root'
})

export class NewdeviceService {

  devicesUrl:string = 'http://0.0.0.0:5000';
  postId:any;
  errorMessage:any;

  constructor(private http:HttpClient) { }

  addDevices(device:any) {
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    //const body = { title: 'Post Content' };
    alert(device.device_id)
    return this.http.post<any>(this.devicesUrl+"/adddevice", device).subscribe({
        next: data => {
            this.postId = data.id;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
  }
}
