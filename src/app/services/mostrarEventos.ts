import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MostrarEventosService {
  constructor( public http:Http ) {  }

  /*Obtiene la información del json en los asests y lo regresa como
  respuesta*/
  getData(){
    return this.http.get("../../assets/jsons/eventos-dados-de-alta.json")
      .map((res: Response) => res.json());
  }
}
