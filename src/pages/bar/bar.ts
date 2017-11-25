import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PreciosMenuService } from '../../app/services/preciosMenu';
import { ListaOrdenesService } from '../../app/services/listaOrdenes';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html'
})
export class BarPage {

  alimentos = [];
  private todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private obtenerAlimentos: PreciosMenuService, private listaOrdenes:ListaOrdenesService,
    private formBuilder: FormBuilder) {

      /*Utiliza un servicio definido en src/app/servicio para obtener info
      de los alimentos*/
      this.obtenerAlimentos.getData()
        .subscribe(resData => this.alimentos = resData);

        this.todo = this.formBuilder.group({
        n0: ['', Validators.required],
        n1: ['', Validators.required],
        n2: ['', Validators.required],
        n3: ['', Validators.required],
        n4: ['', Validators.required],
        n5: ['', Validators.required],
        n6: ['', Validators.required],
        n7: ['', Validators.required],
      });
  }

  logForm(){
    console.log(this.todo.value);
    var num1:number = this.todo.value.n0;
    var num2:number = this.todo.value.n1;
    var num3:number = this.todo.value.n2;
    var num4:number = this.todo.value.n3;
    var num5:number = this.todo.value.n4;
    var num6:number = this.todo.value.n5;
    var num7:number = this.todo.value.n6;
    var num8:number = this.todo.value.n7;

    this.listaOrdenes.postOrden(num1,num2,num3,num4,num5,num6,num7,num8);
    this.navCtrl.pop();

    /*var nombre:string = this.todo.value.nombreDelEvento;
    var fecha:Date = this.todo.value.fechaDelEvento;
    var hora:string = this.todo.value.horaDelEvento;
    var numero:Number = this.todo.value.personasDelEvento;

    this.nuevoEvento.postEvento(nombre,fecha,hora,numero);
    this.navCtrl.pop();*/

  }


  /*El dar la instrucción enviar orden, este método cierra la vista
  actual*/
  guardar(){
  	this.navCtrl.pop();
  }

}
