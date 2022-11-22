import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-c-product',
  templateUrl: './c-product.component.html',
  styleUrls: ['./c-product.component.scss']
})
export class CProductComponent implements OnInit {
  product!: Iproduct | undefined;
  productId:number= 2
  constructor(private productService:ProductService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['id']
    this.product = this.productService.getproduct(this.productId)
  }
  onedit(){
    this.router.navigate(['/products'])
  }

}
