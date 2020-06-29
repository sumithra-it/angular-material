import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/product.service";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  codeArray: Array<string>;
  currentproduct: string;
  constructor(private service: ProductsService) {
    this.codeArray = service.get();
  }

 add() {
    this.codeArray = this.service.add(this.currentproduct);
 }
 remove(removeproduct) {
    this.codeArray = this.service.remove(removeproduct);
 }

}
