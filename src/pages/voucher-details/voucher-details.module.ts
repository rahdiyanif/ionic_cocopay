import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoucherDetailsPage } from './voucher-details';

@NgModule({
  declarations: [
    VoucherDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VoucherDetailsPage),
  ],
})
export class VoucherDetailsPageModule {}
