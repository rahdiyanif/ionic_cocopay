import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EditProfilePage  } from "../edit-profile/edit-profile";

/**
 * Generated class for the OptProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opt-profile',
  templateUrl: 'opt-profile.html',
})

export class OptProfilePage {
  
  constructor(public navCtrl: NavController) {
    
  }
  
  editProfile(){
    this.navCtrl.push(EditProfilePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OptProfilePage');
  }
}



