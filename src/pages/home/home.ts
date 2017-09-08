import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  items = [
  	'Fiesta de mi mamá',
  	'Peda del Sábado',
  	'Noche de Amigos'
  ];
  
  itemSelected(item: string){
  	console.log("Selected Item", item);
  }

}
