import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { BuscadorSpotifyService } from '../../app/services/buscadorSpotify';

@Component({
  selector: 'page-playlistdetalle',
  templateUrl: 'playlistdetalle.html'
})
export class PlaylistDetallePage {

  claves = [];
  clave:string;
  datos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private searchService: BuscadorSpotifyService, private toast: ToastController) {

  }

  borrarCancion(){
    this.toast.create({
      message: `Evento borrado`,
      duration: 1500
    }).present();
    this.searchService.deleteSeleccion(this.clave)
      .subscribe(resData => this.claves = resData);
      this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.clave = this.navParams.get('identificador');
    console.log(this.clave);
    this.searchService.getDetalle(this.clave)
      .subscribe(resData => this.datos = resData);
  }
}
