import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-prize',
  templateUrl: 'prize.html',
})
export class PrizePage {

  row: any;
  col :any;
  prizeItem : any;
  prizeImage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController){
  	 this.row = navParams.get("row");
  	 this.col = navParams.get("col")

  	 this.prizeItem = navParams.get("prizeItem");

     if(this.prizeItem == "Power Bank"){
       this.prizeImage = "powerbank.png"
     }
     else if(this.prizeItem == "PS4"){
        this.prizeImage = "ps4.png"
     }
     else if(this.prizeItem == "iPad Pro"){
       this.prizeImage = "ipad.png"
     }
     else{
       this.prizeImage = "nogift.png"
     }

  }

  ionViewDidLoad() {

  }

  cancelModal(){
  	this.viewCtrl.dismiss();
  }

}
