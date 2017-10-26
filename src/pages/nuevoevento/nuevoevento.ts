import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevoevento',
  templateUrl: 'nuevoevento.html',
})
export class NuevoEventoPage {

  nombreDelEvento: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  guardar(){
  	this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
