import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';

import { SupportComponent } from './support/support.component';
import { DeviceComponent } from './device/device.component';
import { NewdeviceComponent } from './newdevice/newdevice.component';

import { DevicesService } from './devices.service';
import { HomeService } from './home.service';
import { NewdeviceService } from './newdevice.service';
import { DeviceService } from './device.service';



@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    HomeComponent,
    SupportComponent,
    DeviceComponent,
    NewdeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DevicesService,
    HomeService,
    NewdeviceService,
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
