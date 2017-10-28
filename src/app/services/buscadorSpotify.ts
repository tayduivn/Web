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
    headers.append( 'authorization', 'Bearer BQC3CVA0CRXPQKwKRlyhY4QmBaVC4_EH320_FlO7CxO-x_n1OUGVx0gRTHeLmesrfKbZOBUGVjj7kf6wB1nrug');

    let url = this.artistUrl + searchTerm;

    return this.http.get(url, { headers }).map(res => res.json());


  }

}
