import { Injectable } from '@angular/core';
import { Iproduct } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Iproduct[]= [{
    pname: 'Iphone',
    pId: 1,
    pstatus: 'In progress'
   },
   {
    pname: 'Samsung',
    pId: 2,
    pstatus: 'Dispatched'
   },
   {
    pname: 'Lenovo',
    pId: 3,
    pstatus: 'Shipped'
   }
  ]
  constructor() { }

  getAllproduct():Iproduct[]{
    return this.product
  }
  getproduct(id:number){
    return this.product.find(prod => prod.pId === id)
  }
 
}
