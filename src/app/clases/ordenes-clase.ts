import { OrdenDetalleClase } from './orden-detalle-clase';

export class Ordenes{
  nombre: string;
  ordenes: OrdenDetalleClase[];

  constructor(nombre: string){
    this.nombre = nombre;
  }

}
