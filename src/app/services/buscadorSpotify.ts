import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BuscadorSpotifyService {



  private clientId: string = '909b31c0f394487eacc7468c2ac01e93';
  private artistUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id='
    + this.clientId + '&q=';

  constructor(private http: Http) {  }

  searchArtists(searchTerm: string){
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQA5gJAVmt3LZ5dQM04KCHHvvdV83C5gP9wYoNvD2pCmwmIfErOWL2PUSH6Iou7fhk7mJ7rbMc6D8xUMUi9QSw');

    let url = this.artistUrl + searchTerm;

    return this.http.get(url, { headers }).map(res => res.json());


  }

}
