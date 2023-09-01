import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../http/httpservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
isNewUser:boolean=false;
loginForm !: FormGroup
  constructor(private fb:FormBuilder, private http:HttpserviceService,private router : Router){

  }
  ngOnInit(){
    this.createForm();
  }
createForm(){
  this.loginForm = this.fb.group ({
    'email':[''],
    'password': ['']
  })
}

 login(){
  const endPoint= "users?email=" + this.loginForm.value.email + "&&password=" + this.loginForm.value.password;
  this.http.getDataToServer(endPoint).subscribe (
    (el: any) => {
      if( el && el.length> 0 ){
        this.isNewUser = false;
       }else
       {this.isNewUser = true};
      })
    }
  }
    