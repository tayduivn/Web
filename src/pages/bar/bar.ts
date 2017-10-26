import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html'
})
export class BarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  guardar(){
  	this.navCtrl.pop();
  }

}
