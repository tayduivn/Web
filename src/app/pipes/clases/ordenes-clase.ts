import { OrdenDetalleClase } from './orden-detalle-clase';

export class OrdenesClase{
  nombre: string;
  ordenes: OrdenDetalleClase[];

  constructor(nombre: string){
    this.nombre = nombre;
  }

}
