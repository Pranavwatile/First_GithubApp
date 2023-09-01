import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AlertComponent } from './alert/alert.component';


const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'loginpage' , component:LoginpageComponent},
  {path : 'signup' , component : SignupComponent},
  {path: '**' , component:AlertComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
