import { Component , OnInit } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';
import { BuscadorSpotifyService } from '../../app/services/buscadorSpotify';
import { FormControl } from '@angular/forms';
import { PlaylistPage } from '../playlist/playlist';

@Component({
  selector: 'page-karaoke',
  templateUrl: 'karaoke.html'
})
export class KaraokePage implements OnInit{

  inputField: FormControl = new FormControl();
  searchResults: any[] = [];

  constructor(public navCtrl: NavController, private searchService: BuscadorSpotifyService,
    private toast: ToastController) {

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
        else{ this.searchResults = result.tracks.items; }
      }));
  }

  agregarCancion(nombre:string,album:string,artista:string,duracion:Number,imagen:string){
    console.log(nombre);
    console.log(album);
    console.log(artista);
    console.log(duracion);
    console.log(imagen);
    this.searchService.postCancion(nombre,album,artista,duracion,imagen);
    this.toast.create({
      message: `Canción agregada, ${nombre}`,
      duration: 1500
    }).present();
  }
  mostrarCanciones(){
    this.navCtrl.push(PlaylistPage);
  }


}
