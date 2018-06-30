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

  productListEndPoint: string = "http://localhost:8080/mo-ecomm/api/v1/products";
  constructor(public http: HttpClient) {
    console.log('Hello ProductServiceProvider Provider');
  }

  getProdcuts(): Observable<any> {
    return this.http.get(this.productListEndPoint)
      .map(response => {
        return response;
      });
  }
}
