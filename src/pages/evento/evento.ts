import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NuevoEventoPage } from '../nuevoevento/nuevoevento';
import { MostrarEventosService } from '../../app/services/mostrarEventos';
import { EventoDetailPage } from '../eventodetail/eventodetail';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {

  eventos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private obtenerEventos:MostrarEventosService, private afAuth: AngularFireAuth,
    private toast: ToastController) {

      /*Utiliza un servicio definido en src/app/servicio para obtener info
      de los eventos*/
      this.obtenerEventos.getData()
        .subscribe(resData => this.eventos = resData);
  }

  /*Al hacer click en el botón nuevo evento, esta parte permite la
  transición de pantallas */
  nextPage(){
  	this.navCtrl.push(NuevoEventoPage);
  }

  ionViewDidLeave(){
    this.obtenerEventos.getData()
      .subscribe(resData => this.eventos = resData);
  }

  detalle(id: string){
    let data = {
      identificador: id
    };
    this.navCtrl.push(EventoDetailPage, data);
  }

  items = [
  	'Fiesta de mi mamá',
  	'Peda del Sábado',
  	'Noche de Amigos'
  ];

  doRefresh(refresher){
    this.obtenerEventos.getData()
      .subscribe(resData => this.eventos = resData);
    refresher.complete();
  };

  itemSelected(item: string){
  	console.log("Selected Item", item);
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to Retromanía, ${data.email}`,
          duration: 3000
        }).present();
      }else{
        this.toast.create({
          message: `No se encontró autenticación`,
          duration: 3000
        }).present();
      }
    });

    this.obtenerEventos.getData()
      .subscribe(resData => this.eventos = resData);

  }

}
