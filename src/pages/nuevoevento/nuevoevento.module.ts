import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoEventoPage } from './nuevoevento';

@NgModule({
  declarations: [
    NuevoEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoEventoPage),
  ],
})
export class EventoPageModule {}
