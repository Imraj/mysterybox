import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseTokenPage } from './purchase-token';

@NgModule({
  declarations: [
    PurchaseTokenPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseTokenPage),
  ],
})
export class PurchaseTokenPageModule {}
