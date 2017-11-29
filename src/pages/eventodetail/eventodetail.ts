import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { MostrarEventosService } from '../../app/services/mostrarEventos';

@Component({
  selector: 'page-eventodetail',
  templateUrl: 'eventodetail.html',
})
export class EventoDetailPage implements OnInit {
  evento = [];
  clave:string;
  claves = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private obtenerEvento:MostrarEventosService, private toast: ToastController) {  }
  ngOnInit() {}

  borrarEvento(){
    this.toast.create({
      message: `Evento borrado`,
      duration: 1500
    }).present();
    this.obtenerEvento.deleteEvento(this.clave)
      .subscribe(resData => this.claves = resData);
      this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.clave = this.navParams.get('identificador');
    console.log(this.clave);
    this.obtenerEvento.getEvento(this.clave)
      .subscribe(resData => this.evento = resData);
  }
}
