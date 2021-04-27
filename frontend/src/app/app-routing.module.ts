import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component'

const routes: Routes = [
  {
    path:'devices',
    component:DevicesComponent
  }
  /*{
    path:'device',
    component:DeviceComponent
  },
  {
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
