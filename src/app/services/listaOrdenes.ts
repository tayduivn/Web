import { Injectable } from '@angular/core';
import { OrdenesClase } from '../clases/ordenes-clase';

@Injectable()
export class ListaOrdenesService {

  ordenestotales: OrdenesClase[] = []

  constructor() {

    /*Crea varias órdenes utilizando las clases*/
    console.log("Servicio Inicializado");

    let orden1 = new OrdenesClase('Pedido 1');
    let orden2 = new OrdenesClase('Pedido 2');
    let orden3 = new OrdenesClase('Pedido 3');

    this.ordenestotales.push(orden1);
    this.ordenestotales.push(orden2);
    this.ordenestotales.push(orden3);

  }
}
