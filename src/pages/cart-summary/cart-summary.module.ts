import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartSummaryPage } from './cart-summary';

@NgModule({
  declarations: [
    CartSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(CartSummaryPage),
  ],
})
export class CartSummaryPageModule {}
