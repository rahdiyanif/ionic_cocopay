import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { OptionsPage } from '../options/options';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public popoverCtrl: PopoverController) {

  }
  
  goOptions (myEvent){
    let popover = this.popoverCtrl.create(OptionsPage);
    popover.present({
      ev : myEvent
    });
  }
  /**
  constructor(public navCtrl: NavController) {

  }
*/
}
