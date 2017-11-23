import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { BarPage } from '../pages/bar/bar';
import { KaraokePage } from '../pages/karaoke/karaoke';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { NuevoEventoPage } from '../pages/nuevoevento/nuevoevento';
import { EventoPage } from '../pages/evento/evento';
import { OrdenPage } from '../pages/orden/orden';
import { EventoDetailPage } from '../pages/eventodetail/eventodetail';

//Servicios
import { ListaOrdenesService } from './services/listaOrdenes';
import { PreciosMenuService } from './services/preciosMenu';
import { MostrarEventosService } from './services/mostrarEventos';
import { BuscadorSpotifyService } from './services/buscadorSpotify';

//Pipes
import { PlaceholderPipe } from './pipes/placeholder.pipe';

//Facebook
import { Facebook } from '@ionic-native/facebook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PlaceholderPipe,
    BarPage,
    KaraokePage,
    LoginPage,
    TabsPage,
    NuevoEventoPage,
    EventoPage,
    OrdenPage,
    EventoDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BarPage,
    KaraokePage,
    LoginPage,
    TabsPage,
    NuevoEventoPage,
    EventoPage,
    OrdenPage,
    EventoDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaOrdenesService,
    PreciosMenuService,
    MostrarEventosService,
    Facebook,
    BuscadorSpotifyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
