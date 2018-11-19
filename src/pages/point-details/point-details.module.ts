import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PointDetailsPage } from './point-details';

@NgModule({
  declarations: [
    PointDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PointDetailsPage),
  ],
})
export class PointDetailsPageModule {}
