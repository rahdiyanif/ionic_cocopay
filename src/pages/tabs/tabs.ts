import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CocoPage } from '../coco/coco';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CocoPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
