import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { CartSummaryPage } from '../cart-summary/cart-summary';

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

  noProductSelected: boolean = true;
  products: any;
  orderTotalPrice: number = 0;
  orderTotalTax: number = 0;
  orderPrice: number = 0;

  constructor(
    public modalController: ModalController,
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
    this.noProductSelected = true;
    this.loadSelectedProducts();
  }

  loadSelectedProducts() {
    this.products = this.productService.getSelectedProducts()
    
    for(let product of this.products) {
      this.noProductSelected = false;
      let productTax: number = (product.category.taxPercentage * product.price / 100);
      let totalPrice: number = product.price + productTax;
      product.totalPrice = totalPrice; // For UI
      this.orderTotalPrice = this.orderTotalPrice + totalPrice;
      this.orderTotalTax = this.orderTotalTax + productTax;
      this.orderPrice = this.orderPrice + product.price;
    }
  }

  continueToCartSummary() {
    let data = {
      'order': {
        'orderTotalPrice': this.orderTotalPrice,
        'orderTotalTax': this.orderTotalTax,
        'orderPrice': this.orderPrice,
        'products': this.products
      }
    };
    this.navCtrl.push(CartSummaryPage, data);

    // let modal = this.modalController.create(CartSummaryPage, data);
    // modal.present();
  }
}
