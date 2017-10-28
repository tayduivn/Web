import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscadorSpotifyService } from '../../app/services/buscadorSpotify';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'page-karaoke',
  templateUrl: 'karaoke.html'
})
export class KaraokePage implements OnInit{

  inputField: FormControl = new FormControl();
  searchResults: any[] = [];

  constructor(public navCtrl: NavController, private searchService: BuscadorSpotifyService) {

  }

  /*Llama al servicio definido en src/app/services y le pide que haga una
  busqueda utilizando la palabra de nuestro inputField, si el resultado no
  arroja un error, entonces obtenemos los artistas
  */
  ngOnInit(){
    this.inputField.valueChanges
      .subscribe(inputField => this.searchService.searchArtists(inputField)
      .subscribe(result => {
        if(result.status === 400){return;}
        else{ this.searchResults = result.artists.items; }
      }));
  }

}
