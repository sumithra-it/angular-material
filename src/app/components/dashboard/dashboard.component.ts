import { Component, OnInit } from '@angular/core';
import {ProductsInterface, ProductsService} from "../../services/product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Array<string>;
  productsMenu: Array<ProductsInterface>;

  constructor(private service: ProductsService){
    this.products = this.service.get();
  }

  ngOnInit(): void {
    this.productsMenu = this.service.load(this.products);
  }

}
