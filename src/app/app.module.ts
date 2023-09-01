import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';


import { AlertComponent } from './alert/alert.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

import { ImpipePipe } from './impipe.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule } from '@angular/forms'

import { LaptopComponent } from './laptop/laptop.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    ProductsComponent,

    AlertComponent,
    CustomPipeComponent,
    
    ImpipePipe,
         ProductDetailsComponent,
         LoginpageComponent,
         SignupComponent,
         DashboardComponent,
         LaptopComponent,
         MobilesComponent,
         FooterComponent,
 
    
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
