import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpenderDetailsPage } from './spender-details';

@NgModule({
  declarations: [
    SpenderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpenderDetailsPage),
  ],
})
export class SpenderDetailsPageModule {}
