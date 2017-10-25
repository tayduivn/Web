import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BarPage } from '../pages/bar/bar';
import { KaraokePage } from '../pages/karaoke/karaoke';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { NuevoEventoPage } from '../pages/nuevoevento/nuevoevento';
import { EventoPage } from '../pages/evento/evento';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BarPage,
    KaraokePage,
    LoginPage,
    TabsPage,
    NuevoEventoPage,
    EventoPage
  ],
  imports: [
    BrowserModule,
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
    EventoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
