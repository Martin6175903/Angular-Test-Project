import {Component, Input} from "@angular/core";

import {IProduct} from "../../models/product";
import {product} from "../../data/product";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent extends AppComponent{
  @Input() product: IProduct

  details= false;
}
