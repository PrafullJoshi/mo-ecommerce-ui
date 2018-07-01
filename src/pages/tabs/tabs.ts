import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProductsPage } from '../products/products';
import { CartPage } from '../cart/cart';
import { OrdersPage } from '../orders/orders';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  tab1Root = ProductsPage;
  tab2Root = CartPage;
  tab3Root = OrdersPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
