import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product!:Iproduct[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void { 
    this.product = this.productService.getAllproduct()
  }
  
}
