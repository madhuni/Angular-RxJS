import { Component } from '@angular/core';

import { Subscription, Observable, EMPTY } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId;

  products$: Observable<Product[]> = this.productService.products$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY; // EMPTY operator returns the empty observable
      })
    );

  sub: Subscription;

  constructor(private productService: ProductService) { }

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
