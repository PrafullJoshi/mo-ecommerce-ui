import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {
  
  products: any;
  selectedProducts: any[] = [];

  baseUrl: string = "http://mediaocean-ecommerce.us-east-2.elasticbeanstalk.com/mo-ecomm";
  // baseUrl: string = "http://localhost:8080/mo-ecomm";

  productListEndPoint: string = this.baseUrl + "/api/v1/products";
  loadDummyProductsEndPoint: string = this.baseUrl + "/api/v1/products/load";
  
  constructor(public http: HttpClient) {
    console.log('Hello ProductServiceProvider Provider');

  }

  addSelectedProduct(product: any) {
    this.selectedProducts.push(product);
  }

  removeSelectedProduct(product: any) {
    const index: number = this.selectedProducts.indexOf(product);
    if(index !== -1) {
      this.selectedProducts.splice(index, 1);
    }
  }

  getSelectedProducts(): any[] {
    return this.selectedProducts;
  }

  getProdcuts(): Observable<any> {
    if(this.products) {
      return this.products;
    } else {
      return this.http.get(this.productListEndPoint)
      .map(response => {
        this.products = response;
        return response;
      });
    }
  }

  loadDummyProducts(): Observable<any> {
    return this.http.get(this.loadDummyProductsEndPoint)
      .map(response => {
        return response;
      });
  }
}
