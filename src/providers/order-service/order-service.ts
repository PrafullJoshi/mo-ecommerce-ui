import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

/*
  Generated class for the OrderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderServiceProvider {

  checkoutOrderEndPoint: string = "http://localhost:8080/mo-ecomm/api/v1/order";
  getOrdersEndPoint: string = "http://localhost:8080/mo-ecomm/api/v1/order";

  constructor(public http: HttpClient) {
    console.log('Hello OrderServiceProvider Provider');
  }

  checkout(order: any): Observable<any> {
    return this.http.post(this.checkoutOrderEndPoint, order)
      .map(response => {
        console.log('Order placed with response as', response);
        return response;
      });
  }

  getOrders(): Observable<any> {
    return this.http.get(this.getOrdersEndPoint)
      .map(response => {
        console.log('All Orders received with response as', response);
        return response;
      });
  }
}
