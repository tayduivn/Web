import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MostrarEventosService {
  constructor( public http:Http ) {  }

  /*Obtiene la información del json en los asests y lo regresa como
  respuesta*/
  getData(){
    return this.http.get("http://localhost:3000/api/Eventos")
      .map((res: Response) => res.json());
  }

  getEvento(id:string){
    var url:string = "http://localhost:3000/api/Eventos/" + id;
    return this.http.get(url)
      .map((res: Response) => res.json());
  }


}
