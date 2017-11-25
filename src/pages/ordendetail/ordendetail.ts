import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaOrdenesService } from '../../app/services/listaOrdenes';

@Component({
  selector: 'page-ordendetail',
  templateUrl: 'ordendetail.html',
})
export class OrdenDetailPage implements OnInit {
  orden = [];
  clave:string;
  claves = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private obtenerOrden:ListaOrdenesService) {  }
  ngOnInit() {}
/*
  borrarEvento(){
    this.obtenerOrden.deleteEvento(this.clave)
      .subscribe(resData => this.claves = resData);
  }*/

  ionViewDidLoad() {
    this.clave = this.navParams.get('identificador');
    console.log(this.clave);
    this.obtenerOrden.getOrden(this.clave)
      .subscribe(resData => this.orden = resData);
      console.log(this.orden);
  }
}
