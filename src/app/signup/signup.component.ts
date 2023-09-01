import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from '../http/httpservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!:FormGroup;

constructor(private fb:FormBuilder, private http : HttpserviceService){

}

  ngOnInit(){
this.createForm();
  }

  createForm(){
    this.signupForm = this.fb.group ({
      'name':[''],
      'mobileNo':[''],
      'email':[''],
      'password': ['']
    })

  }
  signUp(){
    console.log (this.signupForm.value);

    this.http.postDataToServer ('users', this.signupForm.value).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error)=>{

      })
    
  }

}
