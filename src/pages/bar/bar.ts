import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PreciosMenuService } from '../../app/services/preciosMenu';

@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html'
})
export class BarPage {

  alimentos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private obtenerAlimentos: PreciosMenuService) {

      /*Utiliza un servicio definido en src/app/servicio para obtener info
      de los alimentos*/
      this.obtenerAlimentos.getData()
        .subscribe(resData => this.alimentos = resData);
  }


  /*El dar la instrucción enviar orden, este método cierra la vista
  actual*/
  guardar(){
  	this.navCtrl.pop();
  }

}
