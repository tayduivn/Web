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
  	this.navCtrl.push(EventoPage);
  }

  loginWithFacebook(){
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], username: profile['name']}
      })
    })
  }

}
