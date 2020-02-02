import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const productsObservable = this.productService.getProduct();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (err) => { console.error('something wrong occurred: ' + err); }
    );
  }
}
