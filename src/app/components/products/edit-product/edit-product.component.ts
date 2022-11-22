import { Component, OnInit } from '@angular/core';
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
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.product = this.productService.getproduct(this.productId)
  }

}
