import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BuscadorSpotifyService {


  /*Definimos nuestro id a la url que utilizamos para la petición*/
  private clientId: string = '909b31c0f394487eacc7468c2ac01e93';
  private artistUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id='
    + this.clientId + '&q=';

  constructor(private http: Http) {  }

  searchArtists(searchTerm: string){
    /* Creamos los headers que se requieren para poder hacer la autenticación
    */
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQC-Cp09LIzZEPQdBJpcorg9FwBLRmQ1SwLLeL5363Dc5XMWGy1r7URKJ9PI7jGnldwUXVdfwNqMRX5yvqMLZg');

    /*COnstruimos la url completa con base en la búsqueda del usuario*/
    let url = this.artistUrl + searchTerm;

    /*Solicitamos con get un json con la url que construimos y
    enviándole los headers para que no haya errores de tokken. El resultado
    lo regresamos*/
    return this.http.get(url, { headers }).map(res => res.json());


  }

}
