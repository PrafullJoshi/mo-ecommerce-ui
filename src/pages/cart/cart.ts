import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  products: any;
  orderTotalPrice: number = 0;
  orderTotalTax: number = 0;
  orderPrice: number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productService: ProductServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CartPage');
    this.orderPrice = 0;
    this.orderTotalPrice = 0;
    this.orderTotalTax = 0;
    this.loadSelectedProducts();
  }

  loadSelectedProducts() {
    this.products = this.productService.getSelectedProducts()
    
    for(let product of this.products) {
      let productTax: number = (product.category.taxPercentage * product.price / 100);
      let totalPrice: number = product.price + productTax;
      product.totalPrice = totalPrice; // For UI
      this.orderTotalPrice = this.orderTotalPrice + totalPrice;
      this.orderTotalTax = this.orderTotalTax + productTax;
      this.orderPrice = this.orderPrice + product.price;
    }
  }

}
