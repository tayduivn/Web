import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BuscadorSpotifyService {
private clientId: string = '909b31c0f394487eacc7468c2ac01e93';
private artistUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id='
  + this.clientId + '&q=';

  constructor(private http: Http) {  }

  searchArtists(searchTerm: string){
    let url = this.artistUrl + searchTerm;

    return this.http.get(url).map(res => res.json());


  }

}
