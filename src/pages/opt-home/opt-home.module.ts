import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptHomePage } from './opt-home';

@NgModule({
  declarations: [
    OptHomePage,
  ],
  imports: [
    IonicPageModule.forChild(OptHomePage),
  ],
})
export class OptionsPageModule {}
