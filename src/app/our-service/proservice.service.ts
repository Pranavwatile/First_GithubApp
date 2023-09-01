import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProserviceService {

  constructor() { }
  private productId :number | undefined;
  getMethod(){
    let productList:any=[
    {productName:"Iphone 15",quantity:1,price:100000},
    {productName:"One Plus",quantity:1,price:100000},
    {productName:"Samsung A51",quantity:1,price:10000}
  ]
  return productList;
}

  setData(p_id:number){
    // if(p_id>0){
      this.productId = p_id;

    // }
  }
    
    getProductId(){
      console.log(this.productId)
      // return this.productId;
    }
  }

