import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarPage } from '../bar/bar';
import { ListaOrdenesService } from '../../app/services/listaOrdenes';

@Component({
  selector: 'page-orden',
  templateUrl: 'orden.html'
})
export class OrdenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _listaDeseos: ListaOrdenesService) {

  }

  nextPage(){
  	this.navCtrl.push(BarPage);
  }

}
