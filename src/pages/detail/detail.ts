import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import {NativeAudio} from "@ionic-native/native-audio"

import { PrizePage } from  "../prize/prize";

import { ModalController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { PurchaseTokenPage } from "../purchase-token/purchase-token";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  ystyle : boolean[] = []
  balance : any = ""
  prizes : Observable<any[]>
  items : any = []
  prizeArray : any[] = []
  machineId : any = ""
  snapList = {}
  //prizeItem : any
  showp : boolean = false;

  showpCheckArray = []
  showpCheckArrayVals = []

  dropPrize0 : any; dropPrize1 : any; dropPrize2 : any; dropPrize3 : any; dropPrize4 : any;
  dropPrize5 : any; dropPrize6 : any; dropPrize7 : any; dropPrize8 : any; dropPrize9 : any;
  dropPrize10 : any; dropPrize11 : any; dropPrize12 : any; dropPrize13 : any; dropPrize14 : any;
  dropPrize15 : any; dropPrize16 : any; dropPrize17 : any; dropPrize18 : any; dropPrize19 : any;
  dropPrize20 : any; dropPrize21 : any; dropPrize22 : any; dropPrize23 : any; dropPrize24 : any;
  dropPrize25 : any; dropPrize26 : any; dropPrize27 : any; dropPrize28 : any; dropPrize29 : any;

  showp0:boolean = false; showp1:boolean=false; showp2:boolean; showp3:boolean; showp4:boolean; showp5:boolean;
  showp6:boolean; showp7:boolean; showp8:boolean; showp9:boolean; showp10:boolean; showp11:boolean;
  showp12:boolean; showp13:boolean; showp14:boolean; showp15:boolean; showp16:boolean; showp17:boolean;
  showp18:boolean; showp19:boolean; showp20:boolean; showp21:boolean; showp22:boolean; showp23:boolean;
  showp24:boolean; showp25:boolean; showp26:boolean; showp27:boolean; showp28:boolean; showp29:boolean;

  isArrayInArray(arr, item){
    var item_as_string = JSON.stringify(item);
    var contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }


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
                    false,false,false,false,false]
      this.balance = 100

      // Get key of each PrizeItem
      // Attach the key to the corresponding box
      db.list("PrizeItems")
        .valueChanges()
        .subscribe(res => {
           this.items = res
           for(var itemkey in this.items){
               var item = this.items[itemkey]
               //console.log("itm:",item)
               var p_machine = item.machine
               var p_prize = item.item
               var p_row = item.row
               var p_col = item.col
               var p_available = item.available

               if(p_machine == this.machineId){
                 if(p_row == "1" && p_col == "1"){
                   this.showpCheckArray.push(0)
                 }else if(p_row == "1" && p_col == "2"){
                   this.showpCheckArray.push(1)
                 }else if(p_row == "1" && p_col == "3"){
                   this.showpCheckArray.push(2)
                 }else if(p_row == "1" && p_col == "4"){
                   this.showpCheckArray.push(3)
                 }else if(p_row == "1" && p_col == "5"){
                   this.showpCheckArray.push(4)
                 }
                 else if(p_row == "2" && p_col == "1"){
                   this.showpCheckArray.push(5)
                 }else if(p_row == "2" && p_col == "2"){
                   this.showpCheckArray.push(6)
                 }else if(p_row == "2" && p_col == "3"){
                   this.showpCheckArray.push(7)
                 }else if(p_row == "2" && p_col == "4"){
                   this.showpCheckArray.push(8)
                 }else if(p_row == "2" && p_col == "5"){
                   this.showpCheckArray.push(9)
                 }
                 else if(p_row == "3" && p_col == "1"){
                   this.showpCheckArray.push(10)
                 }else if(p_row == "3" && p_col == "2"){
                   this.showpCheckArray.push(11)
                 }else if(p_row == "3" && p_col == "3"){
                   this.showpCheckArray.push(12)
                 }else if(p_row == "3" && p_col == "4"){
                   this.showpCheckArray.push(13)
                 }else if(p_row == "3" && p_col == "5"){
                   this.showpCheckArray.push(14)
                 }

                 else if(p_row == "4" && p_col == "1"){
                   this.showpCheckArray.push(15)
                 }else if(p_row == "4" && p_col == "2"){
                   this.showpCheckArray.push(16)
                 }else if(p_row == "4" && p_col == "3"){
                   this.showpCheckArray.push(17)
                 }else if(p_row == "4" && p_col == "4"){
                   this.showpCheckArray.push(18)
                 }else if(p_row == "4" && p_col == "5"){
                   this.showpCheckArray.push(19)
                 }

                 else if(p_row == "5" && p_col == "1"){
                   this.showpCheckArray.push(20)
                 }else if(p_row == "5" && p_col == "2"){
                   this.showpCheckArray.push(21)
                 }else if(p_row == "5" && p_col == "3"){
                   this.showpCheckArray.push(22)
                 }else if(p_row == "5" && p_col == "4"){
                   this.showpCheckArray.push(23)
                 }else if(p_row == "5" && p_col == "5"){
                   this.showpCheckArray.push(24)
                 }

                 else if(p_row == "6" && p_col == "1"){
                   this.showpCheckArray.push(25)
                 }else if(p_row == "6" && p_col == "2"){
                   this.showpCheckArray.push(26)
                 }else if(p_row == "6" && p_col == "3"){
                   this.showpCheckArray.push(27)
                 }else if(p_row == "6" && p_col == "4"){
                   this.showpCheckArray.push(28)
                 }else if(p_row == "6" && p_col == "5"){
                   this.showpCheckArray.push(29)
                 }
               }



           }
           this.showpCheckArrayVals = Object.values(this.showpCheckArray)
           console.log("showpCheckArrayVals",this.showpCheckArrayVals)
           //console.log("showpCheckArray true:",this.showpCheckArrayVals.indexOf(1) != -1)
           //console.log("showpCheckArray false:",this.showpCheckArrayVals.indexOf(1) == -1)


           if(this.showpCheckArrayVals.indexOf(0) != -1){
               this.showp0 = true
           }

           if(this.showpCheckArrayVals.indexOf(1) != -1){
               this.showp1 = true
               console.log("showpCheckArray 1 true:",this.showpCheckArrayVals.indexOf(1) != -1)
               console.log("showpCheckArray 1 false:",this.showpCheckArrayVals.indexOf(1) == -1)
           }

           if(this.showpCheckArrayVals.indexOf(2) != -1){
               this.showp2 = true
           }

           if(this.showpCheckArrayVals.indexOf(3) != -1){
               this.showp3 = true
           }

           if(this.showpCheckArrayVals.indexOf(4) != -1){
               this.showp4 = true
               console.log("showpCheckArray 4 true:",this.showpCheckArrayVals.indexOf(4) != -1)
               console.log("showpCheckArray 4 false:",this.showpCheckArrayVals.indexOf(4) == -1)
           }

           if(this.showpCheckArrayVals.indexOf(5) != -1){
               this.showp5 = true
           }

           if(this.showpCheckArrayVals.indexOf(6) != -1){
               this.showp6 = true
           }

           if(this.showpCheckArrayVals.indexOf(7) != -1){
               this.showp7 = true
           }

           if(this.showpCheckArrayVals.indexOf(8) != -1){
               this.showp8 = true
           }

           if(this.showpCheckArrayVals.indexOf(9) != -1){
               this.showp9 = true
           }

           if(this.showpCheckArrayVals.indexOf(10) != -1){
               this.showp10 = true
           }

           if(this.showpCheckArrayVals.indexOf(11) != -1){
               this.showp11 = true
           }

           if(this.showpCheckArrayVals.indexOf(12) != -1){
               this.showp11 = true
           }

           if(this.showpCheckArrayVals.indexOf(13) != -1){
               this.showp13 = true
           }

           if(this.showpCheckArrayVals.indexOf(14) != -1){
               this.showp14 = true
           }

           if(this.showpCheckArrayVals.indexOf(15) != -1){
               this.showp15 = true
           }

           if(this.showpCheckArrayVals.indexOf(16) != -1){
               this.showp16 = true
           }

           if(this.showpCheckArrayVals.indexOf(17) != -1){
               this.showp17 = true
           }

           if(this.showpCheckArrayVals.indexOf(18) != -1){
               this.showp18 = true
           }

           if(this.showpCheckArrayVals.indexOf(19) != -1){
               this.showp19 = true
           }

           if(this.showpCheckArrayVals.indexOf(20) != -1){
               this.showp20 = true
           }

           if(this.showpCheckArrayVals.indexOf(21) != -1){
               this.showp21 = true
           }

           if(this.showpCheckArrayVals.indexOf(22) != -1){
               this.showp22 = true
           }

           if(this.showpCheckArrayVals.indexOf(23) != -1){
               this.showp23 = true
           }

           if(this.showpCheckArrayVals.indexOf(24) != -1){
               this.showp24 = true
           }

           if(this.showpCheckArrayVals.indexOf(25) != -1){
               this.showp25 = true
           }

           if(this.showpCheckArrayVals.indexOf(26) != -1){
               this.showp26 = true
           }

           if(this.showpCheckArrayVals.indexOf(27) != -1){
               this.showp27 = true
           }

           if(this.showpCheckArrayVals.indexOf(28) != -1){
               this.showp28 = true
           }

           if(this.showpCheckArrayVals.indexOf(29) != -1){
               this.showp29 = true
           }
           
        })
        //console.log("showpCheckArray",Object.keys(this.showpCheckArray))
        //console.log("showp0 res:",JSON.stringify(this.showpCheckArray).indexOf(JSON.stringify(["1", "5"])) != -1)

        console.log("this.showp01",this.showp0,this.showp1)

       var app = this
       db.list('PrizeItems')
         .snapshotChanges()
         .subscribe(res => {
              res.map(function (snaps) {
                var snapkey = snaps.key
                var snapval = snaps.payload.val()
                app.snapList[snapkey] = snapval
              });
        });
        //console.log("this.snapList",this.snapList)

      this.nativeAudio.preloadSimple('click', 'assets/mp3/click.mp3')
      this.nativeAudio.preloadSimple('drop', 'assets/mp3/drop.mp3')
      this.nativeAudio.preloadSimple('congrat', 'assets/mp3/congrat.mp3')

      //console.log("this.items values : ",this.items)
  }

  ionViewDidLoad(){
    // Remove the red box for rows and columns without Prizes
    // Change 'click section' color to orange from yellow

    //this.filterItems =  this.db.list("PrizeItems").valueChanges()
    //this.filterItems.forEach(function(fItem){})

  }

  ionViewDidEnter(){
    //console.log("ionViewDidEnter",this.items)
  }

  purchaseToken(){
    this.navCtrl.push(PurchaseTokenPage)
  }

  getStyle(index){
  	if(this.ystyle[index]){
  		return "orange";
  	}else{
  		return "yellow";
  	}
  }

  boxClicked(row,col,index){

    const app = this
    console.log("snapItem Header",this.snapList)
    Object.keys(this.snapList).forEach(function(key) {
        console.log("snapk",key);
        var snapval = app.snapList[key]
        var snap_machine = snapval.machine
        var snap_prize = snapval.item
        var snap_row = snapval.row
        var snap_col = snapval.col
        var snap_available = snapval.available
        console.log("snapval",snap_machine,snap_prize,snap_row,snap_col,snap_available)

        if(snap_machine == app.machineId){
          if(row == snap_row && col == snap_col && snap_available){
             //console.log("rpcp:",row,col,p_row,p_col)
             //console.log("Win : " , p_prize," @index ", index)
             app.prizeArray[index] = snapval

             app.db.list("PrizeItems").update(key,{available:false})

          }
        }

    });

    // for(let item of this.items)
    // {
    //   var p_machine = item.machine
    //   var p_prize = item.item
    //   var p_row = item.row
    //   var p_col = item.col
    //   var p_available = item.available
    //
    //   if(p_machine == this.machineId){
    //     if(row == p_row && col == p_col && p_available){
    //        //console.log("rpcp:",row,col,p_row,p_col)
    //        //console.log("Win : " , p_prize," @index ", index)
    //        this.prizeArray[index] = item
    //     }
    //   }
    //
    // }

    if(this.ystyle[index] == false)
    {
      this.nativeAudio.play("click")
      this.ystyle[index] = !this.ystyle[index]

      setTimeout(function(){
        app.nativeAudio.play("drop")
      },500)

      let prizePage = this.modalCtrl.create(PrizePage,{row:row, col:col, index:index, prizeArray : this.prizeArray})
      setTimeout(function(){
         app.nativeAudio.play("congrat")
         prizePage.present();
       },1500)

       //Update Prize as non available or delete prize
       //this.db.list("PrizeItems").update('-L7UZb5kzbZvuVvyResl',{available : false})
       //this.db.list("PrizeItems").remove('-L7UZb5kzbZvuVvyResl')

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
      else if(index == 10){
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
