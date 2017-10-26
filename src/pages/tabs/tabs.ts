import { Component } from '@angular/core';

import { OrdenPage } from '../orden/orden';
import { KaraokePage } from '../karaoke/karaoke';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = OrdenPage;
  tab3Root = KaraokePage;

  constructor() {

  }
}
