import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MostrarEventosService } from '../../app/services/mostrarEventos';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevoevento',
  templateUrl: 'nuevoevento.html',
})
export class NuevoEventoPage {

  nombreDelEvento: string;
  private todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nuevoEvento:MostrarEventosService, private formBuilder: FormBuilder) {
      this.todo = this.formBuilder.group({
      nombreDelEvento: ['', Validators.required],
      fechaDelEvento: ['', Validators.required],
      horaDelEvento: ['', Validators.required],
      personasDelEvento: ['', Validators.required],
    });
  }

  logForm(){
    console.log(this.todo.value);
    var nombre:string = this.todo.value.nombreDelEvento;
    var fecha:Date = this.todo.value.fechaDelEvento;
    var hora:string = this.todo.value.horaDelEvento;
    var numero:Number = this.todo.value.personasDelEvento;

    this.nuevoEvento.postEvento(nombre,fecha,hora,numero);
    this.navCtrl.pop();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
