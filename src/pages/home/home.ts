import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { CocoPage } from '../coco/coco';
import { OptionsPage } from '../options/options';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  
  goOptions() {
    this.navCtrl.push(OptionsPage, {});
  }

  /**
  constructor(public navCtrl: NavController) {

  }
*/
}
