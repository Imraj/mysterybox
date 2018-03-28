import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MachinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import { DetailPage } from "../detail/detail"

import {NativeAudio} from "@ionic-native/native-audio"


import { PurchaseTokenPage } from "../purchase-token/purchase-token";

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-machine',
  templateUrl: 'machine.html',
})

export class MachinePage {

  machines: Observable<any[]>;
  balance = 100
  constructor(public navCtrl: NavController, public navParams:NavParams, db : AngularFireDatabase) {

    this.machines = db.list("machine").valueChanges();

  }

  itemSelected(machine){
  	this.navCtrl.push(DetailPage,{
  		id : machine.machine
  	})
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter(){

  }

  purchaseToken(){
    this.navCtrl.push(PurchaseTokenPage,{
      
    })
  }

}
