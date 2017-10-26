import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MostrarEventosService {
  constructor( public http:Http ) {  }

  getData(){
    return this.http.get("../../assets/jsons/eventos-dados-de-alta.json")
      .map((res: Response) => res.json());
  }
}
