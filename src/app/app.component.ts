import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
 users:any;

  constructor( private userdata: UserdataService){

    console.log("userdata",userdata.users())
    
    this.users= userdata.users();
  }

}
