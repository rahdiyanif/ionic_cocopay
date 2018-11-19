import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyVoucherPage } from './my-voucher';

@NgModule({
  declarations: [
    MyVoucherPage,
  ],
  imports: [
    IonicPageModule.forChild(MyVoucherPage),
  ],
})
export class MyVoucherPageModule {}
