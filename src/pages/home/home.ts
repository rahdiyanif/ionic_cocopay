import { Component } from '@angular/core';
import { NavController, PopoverController, Platform } from 'ionic-angular';
import { OptHomePage } from '../opt-home/opt-home';
import { SpenderDetailsPage } from '../spender-details/spender-details';
import { LenderDetailsPage } from '../lender-details/lender-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  listofdebt: string = "spender";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  
  goOptions (myEvent){
    let popover = this.popoverCtrl.create(OptHomePage);
    popover.present({
      ev : myEvent
    });
  }

  goSeeSpenderDetails(){
    this.navCtrl.push(SpenderDetailsPage);
  }

  goSeeLenderDetails(){
    this.navCtrl.push(LenderDetailsPage);
  }
  /**
  constructor(public navCtrl: NavController) {

  }
*/
}
