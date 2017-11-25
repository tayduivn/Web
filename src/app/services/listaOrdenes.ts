import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ListaOrdenesService {

  constructor( public http:Http ) {  }

  getData(){
    return this.http.get("http://localhost:3000/api/Pedidos")
      .map((res: Response) => res.json());
  }

  getOrden(id:string){
    var url:string = "http://localhost:3000/api/Pedidos/" + id;
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  postOrden(n1:Number,n2:Number,n3:Number,n4:Number,n5:Number,n6:Number,n7:Number,n8:Number,){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type','application/json');

    let parametros = {
      "numchilaquiles": n1,
      "numtacos": n2,
      "nummolletes": n3,
      "numhamburguesa": n4,
      "numcoca": n5,
      "numnaranjada": n6,
      "numagua": n7,
      "numcerveza": n8,
    };

    this.http.post('http://localhost:3000/api/Pedidos', JSON.stringify(parametros),{headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      })

  }

  deleteOrden(id:string){
    let headers2 = new Headers();
    headers2.append('Accept', 'application/json');
    var url2:string = "http://localhost:3000/api/Pedidos/" + id;
    return this.http.delete(url2,{headers: headers2})
      .map((res: Response) => res.json());
  }



    /*Crea varias órdenes utilizando las clases*/

}
