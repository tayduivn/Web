import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarPage } from '../bar/bar';
import { ListaOrdenesService } from '../../app/services/listaOrdenes';

@Component({
  selector: 'page-orden',
  templateUrl: 'orden.html'
})
export class OrdenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _listaOrdenes: ListaOrdenesService) {

  }

  nextPage(){
  	this.navCtrl.push(BarPage);
  }

  itemSelected(item: string){
  	console.log("Selected Item", item);
  }

}
