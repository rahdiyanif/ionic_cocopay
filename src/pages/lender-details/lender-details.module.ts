import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LenderDetailsPage } from './lender-details';

@NgModule({
  declarations: [
    LenderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LenderDetailsPage),
  ],
})
export class LenderDetailsPageModule {}
