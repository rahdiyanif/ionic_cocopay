import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

   // You can get this data from your API. This is a dumb data for being an example.
  public user_data = {
    profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
    name: 'Helen Olivia',
    email: 'helenolivia@gmail.com',
    password: '1234'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController
    ) {
  }

  updateProfile(){
    let loader = this.loadingCtrl.create({
      duration: 200
    });
    // Back to Profile after update
    loader.present().then( () => this.navCtrl.pop()); 
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
