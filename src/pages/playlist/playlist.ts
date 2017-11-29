import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BuscadorSpotifyService } from '../../app/services/buscadorSpotify';

@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html'
})
export class PlaylistPage {

  songs = [];

  constructor(public navCtrl: NavController, private searchService: BuscadorSpotifyService) {
    this.searchService.getData()
      .subscribe(resData => this.songs = resData);
  }






}
