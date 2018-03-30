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
  index : any;
  prizeArray : any[] = []
  prizeItem : any;
  prizeImage : any;
  allPrizeItems : string[] = ["Power Bank","PS4","iPad Pro"]
  allPrizeImages : string[] = ["powerbank.png","ps4.png","ipad.png"]

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController){

     this.row = navParams.get("row")
  	 this.col = navParams.get("col")
     this.index = navParams.get("index")
     this.prizeArray = navParams.get("prizeArray")
    // console.log("tpl: ",this.prizeArray)

    // this.allPrizeItems = ["Power Bank","PS4","iPad Pro"]
     //this.allPrizeImages = ["powerbank.png","ps4.png","ipad.png"]

     if(this.prizeArray[this.index] != undefined ){
         this.prizeItem = this.prizeArray[this.index].item
         //console.log("this.prizeItem",this.prizeItem)

         if(this.prizeItem == this.allPrizeItems[0]){
           this.prizeImage = this.allPrizeImages[0]
         }
         else if(this.prizeItem == this.allPrizeItems[1]){
            this.prizeImage = this.allPrizeImages[1]
         }
         else if(this.prizeItem == this.allPrizeItems[2]){
           this.prizeImage = this.allPrizeImages[2]
         }

     }else{
       this.prizeImage = "nogift.png"
     }

  }

  ionViewDidLoad() {

  }

  cancelModal(){
  	this.viewCtrl.dismiss();
  }

}
