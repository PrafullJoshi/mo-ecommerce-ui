import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderServiceProvider } from '../../providers/order-service/order-service';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  orders: any;
  noOrdersYet: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public orderService: OrderServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  ionViewWillEnter() {
    this.noOrdersYet = true;
    this.getOrders();
  }


  getOrders() {
    this.orderService.getOrders()
      .subscribe(response => {
        this.orders = response;
        if(this.orders.length > 0) {
          this.noOrdersYet = false;
        }
      });
  }

}
