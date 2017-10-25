import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoEventoPage } from '../nuevoevento/nuevoevento';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  nextPage(){
  	this.navCtrl.push(NuevoEventoPage);
  }

  items = [
  	'Fiesta de mi mamá',
  	'Peda del Sábado',
  	'Noche de Amigos'
  ];

  itemSelected(item: string){
  	console.log("Selected Item", item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
