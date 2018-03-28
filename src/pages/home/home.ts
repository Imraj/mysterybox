import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MachinePage } from "../machine/machine"
import { DetailPage } from "../detail/detail"
import { PrizePage } from  "../prize/prize";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  displayView(){
  	this.navCtrl.push(MachinePage,{})
  }

}
