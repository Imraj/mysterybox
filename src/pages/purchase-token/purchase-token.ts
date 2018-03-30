import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PurchaseTokenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-token',
  templateUrl: 'purchase-token.html',
})
export class PurchaseTokenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseTokenPage');
  }

  purchase(token){
    console.log("Token to purchase : " + token )
  }

}
