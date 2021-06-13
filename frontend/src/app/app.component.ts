import { Component, OnInit } from '@angular/core';
import { Devices } from './devices'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'labmgr';
  login:boolean = false;

  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  logIn(usercred:any) {
    this.login = true;
    //const navigationDetails: string[] = ['/devices'];
    const navigationDetails: string[] = ['/home'];
    this.router.navigate(navigationDetails);
    return this.login
  }

  logOut() {
    this.login = false;
    return this.login
  }

}
