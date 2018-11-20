import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, Platform } from 'ionic-angular';

import { OptProfilePage } from '../opt-profile/opt-profile';
import { EditProfilePage } from '../edit-profile/edit-profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  listofpromo: string = "browseDeals";
  isAndroid: boolean = false;

  public user_data = {
    profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120'
  };

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public platform: Platform
    ) {
      this.isAndroid = platform.is('android');
  }
  
  goEditProfile(){
    this.navCtrl.push(EditProfilePage);
  }
  
  
  goOptProfile (myEvent){
    let popover = this.popoverCtrl.create(OptProfilePage);
    popover.present({
      ev : myEvent
    });
    
  }


}


/**
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
*/
