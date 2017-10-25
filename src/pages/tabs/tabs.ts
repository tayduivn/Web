import { Component } from '@angular/core';

import { BarPage } from '../bar/bar';
import { KaraokePage } from '../karaoke/karaoke';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = BarPage;
  tab3Root = KaraokePage;

  constructor() {

  }
}
