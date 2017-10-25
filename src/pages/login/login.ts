import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {



  constructor(public navCtrl: NavController) {

  }

  login(){
  	this.navCtrl.push(EventoPage);
  }

}
