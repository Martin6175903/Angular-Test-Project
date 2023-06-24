import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {product} from "./data/product";
import {ProductService} from "./services/product.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular project';
  // products:IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>;
  term = '';

  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.loading = true;
    this.products$ = this.productService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productService.getAll().subscribe(products => {
    //   this.products = products;
    //   this.loading = false;
    // })
  }
}
