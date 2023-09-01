import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  
  selectProductId:any;

  
   constructor(private activateRoute:ActivatedRoute , private router : Router){
    this.selectProductId =  this.activateRoute.snapshot.paramMap.get('productId');
    console.log("selected Product Id",this.selectProductId);
   }

   toRouter(){
    this.router.navigate(['/home'])
   }
}
