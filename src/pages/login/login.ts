import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  userData = null;

  constructor(public navCtrl: NavController, private facebook: Facebook) {

  }

  login(){
  	this.navCtrl.setRoot(EventoPage);
  }

  /*
  Al importar funciones de facebook e inicializarlas en el constructor nos
  permite solicitar datos como en este caso el name, first_name, email, y
  todas esas variables las guardamos en la variable vacía userData definida
  arriba
  */
  loginWithFacebook(){
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], username: profile['name']}
      })
    })
  }

}
