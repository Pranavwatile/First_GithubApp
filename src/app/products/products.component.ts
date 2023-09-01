import { Component } from '@angular/core';
import { ProserviceService } from '../our-service/proservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
productList!:any; 

  
  Id!: void;

  constructor(private productObj : ProserviceService , private router : Router ){
    this.productList = this.productObj.getMethod()
    this.Id = this.productObj.getProductId()

  }

  navigateTo(){
 this.router.navigate(['/product-details'])
    this.Id = this.productObj.getProductId()

  }


}
