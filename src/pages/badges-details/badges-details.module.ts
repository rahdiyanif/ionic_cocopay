import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BadgesDetailsPage } from './badges-details';

@NgModule({
  declarations: [
    BadgesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BadgesDetailsPage),
  ],
})
export class BadgesDetailsPageModule {}
