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
    headers.append( 'authorization', 'Bearer BQC3CVA0CRXPQKwKRlyhY4QmBaVC4_EH320_FlO7CxO-x_n1OUGVx0gRTHeLmesrfKbZOBUGVjj7kf6wB1nrug');

    /*COnstruimos la url completa con base en la búsqueda del usuario*/
    let url = this.artistUrl + searchTerm;

    /*Solicitamos con get un json con la url que construimos y
    enviándole los headers para que no haya errores de tokken. El resultado
    lo regresamos*/
    return this.http.get(url, { headers }).map(res => res.json());


  }

}
