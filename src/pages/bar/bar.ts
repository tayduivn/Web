import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PreciosMenuService } from '../../app/services/preciosMenu';

@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html'
})
export class BarPage {

  alimentos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private obtenerAlimentos: PreciosMenuService) {
      this.obtenerAlimentos.getData()
        .subscribe(resData => this.alimentos = resData);
  }

  guardar(){
  	this.navCtrl.pop();
  }

}
