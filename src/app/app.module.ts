import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsPage } from '../pages/products/products';
import { ProductsPageModule } from '../pages/products/products.module';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CartPage } from '../pages/cart/cart';
import { CartPageModule } from '../pages/cart/cart.module';
import { CartSummaryPage } from '../pages/cart-summary/cart-summary';
import { CartSummaryPageModule } from '../pages/cart-summary/cart-summary.module';
import { OrderServiceProvider } from '../providers/order-service/order-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductsPage,
    CartPage,
    CartSummaryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductsPage,
    CartPage,
    CartSummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductsPageModule,
    CartPageModule,
    CartSummaryPageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductServiceProvider,
    OrderServiceProvider
  ]
})
export class AppModule {}
