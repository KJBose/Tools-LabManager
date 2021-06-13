import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component'
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component'
import { SupportComponent } from './support/support.component'
import { DeviceComponent } from './device/device.component'
import { NewdeviceComponent } from './newdevice/newdevice.component'

const routes: Routes = [
  {
    path:'devices',
    component:DevicesComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'index',
    component:AppComponent
  },
  {
    path:'support',
    component:SupportComponent
  },
  {
    path:'device/:id',
    component:DeviceComponent
  },
  {
    path:'newdevice',
    component:NewdeviceComponent
  }


  /*{
    path:'profile/:username',
    component:ProfileComponent
  },
  {
    path:'signUp',
    component:AuthComponent
  },
  {
    path:'signIn',
    component:AuthComponent
  },
  {
    path:'signOut',
    component:AuthComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
