import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product!: Iproduct | undefined;
  productId:number=2
  constructor(private productService:ProductService,
   private router:Router) { }

  ngOnInit(): void {
    this.product = this.productService.getproduct(this.productId) 
  }
  onProductUpdt(){
    this.router.navigate(['/product'])
  }
}
