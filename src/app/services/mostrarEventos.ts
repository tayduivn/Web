import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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

  postEvento(name:string,date:Date,hour:string,number:Number){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type','application/json');

    let parametros = {
      "nombre": name,
      "fecha": date,
      "hora": hour,
      "numeropersonas": number
    };

    this.http.post('http://localhost:3000/api/Eventos', JSON.stringify(parametros),{headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      })

  }

  deleteEvento(id:string){
    let headers2 = new Headers();
    headers2.append('Accept', 'application/json');
    var url2:string = "http://localhost:3000/api/Eventos/" + id;
    return this.http.delete(url2,{headers: headers2})
      .map((res: Response) => res.json());
  }


}
