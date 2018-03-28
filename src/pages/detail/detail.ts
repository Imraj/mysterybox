import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import {NativeAudio} from "@ionic-native/native-audio"

import { PrizePage } from  "../prize/prize";

import { ModalController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  ystyle : boolean[]
  balance : any
  prizes : Observable<any[]>
  items : any
  prizeArray : any[]
  machineId : any
  prizeItem : any

  dropPrize0 : any; dropPrize1 : any; dropPrize2 : any; dropPrize3 : any; dropPrize4 : any;
  dropPrize5 : any; dropPrize6 : any; dropPrize7 : any; dropPrize8 : any; dropPrize9 : any;
  dropPrize10 : any; dropPrize11 : any; dropPrize12 : any; dropPrize13 : any; dropPrize14 : any;
  dropPrize15 : any; dropPrize16 : any; dropPrize17 : any; dropPrize18 : any; dropPrize19 : any;
  dropPrize20 : any; dropPrize21 : any; dropPrize22 : any; dropPrize23 : any; dropPrize24 : any;
  dropPrize25 : any; dropPrize26 : any; dropPrize27 : any; dropPrize28 : any; dropPrize29 : any;

  constructor(public navCtrl: NavController, public navParams : NavParams,
              public modalCtrl: ModalController, public nativeAudio : NativeAudio,
              public db : AngularFireDatabase)
  {
  		this.machineId = navParams.get("id")
  		this.ystyle = [false,false,false,false,false,
                    false,false,false,false,false,
                    false,false,false,false,false,
                    false,false,false,false,false,
                    false,false,false,false,false,
                    false,false,false,false,false
                    ]
      this.balance = 100

      db.list("PrizeItems")
        .valueChanges()
        .subscribe(res => {
           this.items = res
        })

      this.prizes = db.list("PrizeItems").valueChanges()

      this.nativeAudio.preloadSimple('click', 'assets/mp3/click.mp3')
      this.nativeAudio.preloadSimple('drop', 'assets/mp3/drop.mp3')
      this.nativeAudio.preloadSimple('congrat', 'assets/mp3/congrat.mp3')

  }

  ionViewDidEnter(){


    console.log("ionViewDidEnter",this.items)
  }

  getStyle(index){
  	if(this.ystyle[index]){
  		return "orange";
  	}else{
  		return "yellow";
  	}
  }

  boxClicked(row,col,index){
    
    this.items.forEach((item,index)=>{
      //console.log("item",item,"index",index)
      var p_machine = item.machine
      var p_prize = item.item
      var p_row = item.row
      var p_col = item.col

      //console.log("Compare Machine : ", p_machine == this.machineId)
      if(p_machine == this.machineId){
         if(row == p_row && col == p_col){
            console.log("rpcp:",row,col,p_row,p_col)
            console.log("You won a prize : " , p_prize)
            this.prizeItem = p_prize
         }else{
            console.log("NoGift in ", row, col)
            this.prizeItem = "nogift"
         }
      }
      //console.log("index : ",index,p_machine,p_row,p_col,p_prize)
      //console.log("info : ",row,col,index,this.machineId)
    })

    const app = this

    if(this.ystyle[index] == false)
    {
      this.nativeAudio.play("click")
      this.ystyle[index] = !this.ystyle[index]


      setTimeout(function(){
        app.nativeAudio.play("drop")
      },500)

      let prizePage = this.modalCtrl.create(PrizePage,{row:row, col:col, prizeItem : this.prizeItem})

      setTimeout(function(){
         app.nativeAudio.play("congrat")
         prizePage.present();
       },1500)

      if(index == 0){
         this.dropPrize0 = "animated zoomOutDown"
      }else if(index == 1){
         this.dropPrize1 = "animated zoomOutDown"
      }
      else if(index == 2){
         this.dropPrize2 = "animated zoomOutDown"
      }
      else if(index == 3){
         this.dropPrize3 = "animated zoomOutDown"
      }
      else if(index == 4){
         this.dropPrize4 = "animated zoomOutDown"
      }
      else if(index == 5){
        this.dropPrize5 = "animated zoomOutDown"
      }
      else if(index == 6){
        this.dropPrize6 = "animated zoomOutDown"
      }
      else if(index == 7){
        this.dropPrize7 = "animated zoomOutDown"
      }
      else if(index == 8){
        this.dropPrize8 = "animated zoomOutDown"
      }
      else if(index == 9){
        this.dropPrize9 = "animated zoomOutDown"
      }
      if(index == 10){
         this.dropPrize10 = "animated zoomOutDown"
      }else if(index == 11){
         this.dropPrize11 = "animated zoomOutDown"
      }
      else if(index == 12){
         this.dropPrize12 = "animated zoomOutDown"
      }
      else if(index == 13){
         this.dropPrize13 = "animated zoomOutDown"
      }
      else if(index == 14){
         this.dropPrize14 = "animated zoomOutDown"
      }
      else if(index == 15){
        this.dropPrize15 = "animated zoomOutDown"
      }
      else if(index == 16){
        this.dropPrize16 = "animated zoomOutDown"
      }
      else if(index == 17){
        this.dropPrize17 = "animated zoomOutDown"
      }
      else if(index == 18){
        this.dropPrize18 = "animated zoomOutDown"
      }
      else if(index == 19){
        this.dropPrize19 = "animated zoomOutDown"
      }
      if(index == 20){
         this.dropPrize20 = "animated zoomOutDown"
      }else if(index == 21){
         this.dropPrize1 = "animated zoomOutDown"
      }
      else if(index == 22){
         this.dropPrize22 = "animated zoomOutDown"
      }
      else if(index == 23){
         this.dropPrize23 = "animated zoomOutDown"
      }
      else if(index == 24){
         this.dropPrize24 = "animated zoomOutDown"
      }
      else if(index == 25){
        this.dropPrize25 = "animated zoomOutDown"
      }
      else if(index == 26){
        this.dropPrize26 = "animated zoomOutDown"
      }
      else if(index == 27){
        this.dropPrize27 = "animated zoomOutDown"
      }
      else if(index == 28){
        this.dropPrize28 = "animated zoomOutDown"
      }
      else if(index == 29){
        this.dropPrize29 = "animated zoomOutDown"
      }


     }
  }

}
