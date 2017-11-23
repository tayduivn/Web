import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MostrarEventosService } from '../../app/services/mostrarEventos';

@Component({
  selector: 'page-eventodetail',
  templateUrl: 'eventodetail.html',
})
export class EventoDetailPage implements OnInit {
  evento = [];
  clave:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private obtenerEvento:MostrarEventosService) {  }
  ngOnInit() {}



  ionViewDidLoad() {
    this.clave = this.navParams.get('identificador');
    console.log(this.clave);
    this.obtenerEvento.getEvento(this.clave)
      .subscribe(resData => this.evento = resData);
  }
}
