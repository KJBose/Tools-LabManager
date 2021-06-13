import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewdeviceService } from './../newdevice.service'

@Component({
  selector: 'app-newdevice',
  templateUrl: './newdevice.component.html',
  styleUrls: ['./newdevice.component.css']
})
export class NewdeviceComponent implements OnInit {
  newservice:any;

  constructor(service:NewdeviceService, private router:Router) {
    this.newservice = service;
   }

  ngOnInit(): void {
  }

  add_newdevice(new_device_data: any){
    /*for (var item of this.devices) {
      if (device_id == item.device_id) {
        item.reserved = true;
        item.reservedby = " replace with login user";
      }
    }*/
    //alert(new_device_data.device_id);
    status = this.newservice.addDevices(new_device_data);
    /*var formData: any = new FormData();
    formData.append("device_id", this.form.get('device_id').value);
    formData.append("device_name", this.form.get('device_name').value);*/


    const navigationDetails: string[] = ['/devices'];
    this.router.navigate(navigationDetails);
    return true

  }

}
