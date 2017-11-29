import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarPage } from '../bar/bar';
import { ListaOrdenesService } from '../../app/services/listaOrdenes';
import { OrdenDetailPage } from '../ordendetail/ordendetail';

@Component({
  selector: 'page-orden',
  templateUrl: 'orden.html'
})
export class OrdenPage {

  ordenes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private listaOrdenes: ListaOrdenesService) {
    /*Damos de alta el servicio que permite recibir las órdenes*/
    this.listaOrdenes.getData()
      .subscribe(resData => this.ordenes = resData);
  }

  doRefresh(refresher){
    this.listaOrdenes.getData()
      .subscribe(resData => this.ordenes = resData);
    refresher.complete();
  };

  detalle(id: string){
    let data = {
      identificador: id
    };
    this.navCtrl.push(OrdenDetailPage, data);
  }


  nextPage(){
  	this.navCtrl.push(BarPage);
  }

  ionViewDidLeave(){
    this.listaOrdenes.getData()
      .subscribe(resData => this.ordenes = resData);
  }

  ionViewWillLoad(){
    this.listaOrdenes.getData()
      .subscribe(resData => this.ordenes = resData);
  }

  itemSelected(item: string){
  	console.log("Selected Item", item);
  }

}
