import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';

import { DevicesService } from './devices.service';


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
