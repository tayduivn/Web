import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  userData = null;
  user = {} as User;

  constructor(public navCtrl: NavController, private facebook: Facebook,
    private afAuth: AngularFireAuth, private toast: ToastController) {

  }

  async login(user: User){
    if(user.password == '1234567890'){
      try{
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
        if(result){
          this.navCtrl.setRoot(EventoPage);
        }
      }
      catch(e){
        console.error(e);
      }
    }else{
      this.toast.create({
        message: `Contraseña incorrecta, intenta de nuevo`,
        duration: 1500
      }).present();
    }

  	/*this.navCtrl.setRoot(EventoPage);*/
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
