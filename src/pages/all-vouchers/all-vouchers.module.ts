import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllVouchersPage } from './all-vouchers';

@NgModule({
  declarations: [
    AllVouchersPage,
  ],
  imports: [
    IonicPageModule.forChild(AllVouchersPage),
  ],
})
export class AllVouchersPageModule {}
