import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { OrderServiceProvider } from '../../providers/order-service/order-service';

/**
 * Generated class for the CartSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart-summary',
  templateUrl: 'cart-summary.html',
})
export class CartSummaryPage {

  order: any;
  products: any;
  orderTotalPrice: number = 0;
  orderTotalTax: number = 0;
  orderPrice: number = 0;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public orderService: OrderServiceProvider,
    public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartSummaryPage');
    this.order = this.navParams.get("order");
    this.orderPrice = this.order.orderPrice;
    this.orderTotalPrice = this.order.orderTotalPrice;
    this.orderTotalTax = this.order.orderTotalTax;
    this.products = this.order.products;
  }

  ionViewWillEnter() {
    console.log(this.order);
  }

  continueToCheckoutCart() {
    let finalProducts: any[] = [];
    for(let product of this.products) {
      let productId = product.productId;
      let finalProduct = {
        'product' : {
          'productId': productId
        }
      };
      finalProducts.push(finalProduct);
    }

    let finalOrder: any = {
      'orderItems': finalProducts
    };

    console.log('Order to place ', finalOrder);
    this.orderService.checkout(finalOrder)
      .subscribe(response => {
        console.log('Order checked out with response as', response);
        if(response.orderId) {
          this.toastController.create({
            message: 'Order Successfully Placed. You can see details in Orders Tab.',
            duration: 5000,
            position: 'top'
          }).present();

          this.handleSuccess();
          /* let alert = this.alertController.create({
            title: 'Success',
            message: 'Order Placed Successfully',
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                  
                }
              }
            ]
          });
          alert.present(); */
        }
      });
  }

  handleSuccess() {
    this.navCtrl.parent.select(0);
  }

}
