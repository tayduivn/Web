import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
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
    headers.append( 'authorization', 'Bearer BQA7vasg2OSOt8JOjUz_6RkTF9j-uV3psk5n5DE4i8vk2O01EWk64nj4Sby2zhH71w696rfdhQQ9ppnr51I');

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

  getData(){
    return this.http.get("http://localhost:3000/api/Canciones")
      .map((res: Response) => res.json());
  }

  getDetalle(id:string){
    var url:string = "http://localhost:3000/api/Canciones/" + id;
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  deleteSeleccion(id:string){
    let headers2 = new Headers();
    headers2.append('Accept', 'application/json');
    var url2:string = "http://localhost:3000/api/Canciones/" + id;
    return this.http.delete(url2,{headers: headers2})
      .map((res: Response) => res.json());
  }



}
