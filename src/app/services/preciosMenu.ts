import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PreciosMenuService {
  constructor(public http:Http ) {  }


  /*Obtiene la información del json en los asests y lo regresa como
  respuesta*/
  getData(){
    return this.http.get("../../assets/jsons/precio-del-menu.json")
      .map((res: Response) => res.json());
  }
}
