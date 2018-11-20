import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, PopoverController } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { CocoPage } from '../pages/coco/coco';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';

import { OptHomePage } from '../pages/opt-home/opt-home';
import { OptProfilePage } from '../pages/opt-profile/opt-profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    CocoPage,
    ProfilePage,
    EditProfilePage,
    OptHomePage,
    OptProfilePage,
    SettingsPage,
    HelpPage,
    AboutPage	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    CocoPage,
    ProfilePage,
    EditProfilePage,
    OptHomePage,
    OptProfilePage,
    SettingsPage,
    HelpPage,
    AboutPage	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
