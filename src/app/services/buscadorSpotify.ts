import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BuscadorSpotifyService {


  /*Definimos nuestro id a la url que utilizamos para la petición*/
  private clientId: string = '909b31c0f394487eacc7468c2ac01e93';
  private artistUrl: string = 'https://api.spotify.com/v1/search?type=track&limit=10&client_id='
    + this.clientId + '&q=';

  constructor(private http: Http) {  }

  searchArtists(searchTerm: string){
    /* Creamos los headers que se requieren para poder hacer la autenticación
    */
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQD8W_Ltr__FHOSqoRVeDQXrDjpXJ_0PU_hLiJj_UQplaJLJYPHWbzVW9vizTT_9wjJb4z5AFXKdsKPoQZk');

    /*COnstruimos la url completa con base en la búsqueda del usuario*/
    let url = this.artistUrl + searchTerm;

    /*Solicitamos con get un json con la url que construimos y
    enviándole los headers para que no haya errores de tokken. El resultado
    lo regresamos*/
    return this.http.get(url, { headers }).map(res => res.json());


  }

  postCancion(name:string,album:string,artist:string,duration:Number,image:string){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type','application/json');

    let parametros = {
      "nombre": name,
      "album": album,
      "artista": artist,
      "duracion": duration,
      "image": image
    };

    this.http.post('http://localhost:3000/api/Canciones', JSON.stringify(parametros),{headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      })
  }

}
