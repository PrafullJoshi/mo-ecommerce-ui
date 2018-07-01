import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  products: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productService: ProductServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProdcuts()
      .subscribe(response => {
        this.products = response;
      });
  }

  productClicked(product: any, toggle: any) {
    //console.log(product);
    console.log(toggle.checked);
    if(toggle.checked) {
      this.productService.addSelectedProduct(product);
    } else {
      this.productService.removeSelectedProduct(product);
    }
  }
}
