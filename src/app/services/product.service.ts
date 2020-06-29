import { Injectable } from '@angular/core';

let products: Array<string> = ['ICE', 'CUST'];
//Mock JSON data
// let productsMenu: Array<ProductsInterface> =
//   [{
//     "code": "ICE",
//     "name": "ICE",
//     "cost": 3.99,
//     "size": 'small'
//   }, {
//     "code": "CUST",
//     "name": "CUSTARD",
//     "cost": 4.99,
//     "size": 'small'
//   }, {
//     "code": "SAND",
//     "name": "COOKIE SANDWICH",
//     "cost": 11.59,
//     "size": '6-pack'
//   }, {
//     "code": "CAKE",
//     "name": "CAKE",
//     "cost": 39.99,
//     "size": 'small'
//   }, {
//     "code": "MILKS",
//     "name": "MILKSHAKE",
//     "cost": 7.50,
//     "size": 'large'
//   }
//   ];

export interface ProductsInterface {
  code: string;
  name: string;
  cost: number;
  size: string;
};

let productMap = new Map<String, ProductsInterface>();
productMap.set("ICE", {
  "code": "ICE",
  "name": "ICE",
  "cost": 3.99,
  "size": 'small'
});
productMap.set("CUST", {
  "code": "CUST",
    "name": "CUSTARD",
    "cost": 4.99,
    "size": 'small'
});
productMap.set("SAND", {
  "code": "SAND",
  "name": "COOKIE SANDWICH",
  "cost": 11.59,
  "size": '6-pack'
});
productMap.set("CAKE", {
  "code": "CAKE",
    "name": "CAKE",
    "cost": 39.99,
    "size": 'small'
});
productMap.set("MILKS", {
  "code": "MILKS",
  "name": "MILKSHAKE",
  "cost": 7.50,
  "size": 'large'
});

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }
  get() {
    return products;
  }
  load(productcodes) {
    let matchingProducts = new Array<ProductsInterface>();
    if (productcodes) {
       productcodes.forEach(function (code) {
         matchingProducts.push(productMap.get(code));
      })
    }
    return matchingProducts;
  }
  add(newprodcode) {
    products.push(newprodcode);
    return this.get();
  }
  remove(newprodcode) {
    products.splice(products.indexOf(newprodcode), 1);
    return this.get();
  }
}
