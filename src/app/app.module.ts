import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {File} from '@ionic-native/file'
import {NativeAudio} from "@ionic-native/native-audio"

import { NativePageTransitions } from "@ionic-native/native-page-transitions"

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MachinePage } from '../pages/machine/machine';
import { DetailPage } from '../pages/detail/detail';
import { PrizePage } from "../pages/prize/prize";
import { PurchaseTokenPage } from "../pages/purchase-token/purchase-token";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { IonicImageLoader } from 'ionic-image-loader';

export const firebaseConfig = {
    apiKey: "AIzaSyBswqSAufuq17FhKRE7ynVeed5y8t_zaD4",
    authDomain: "mysterybox-38c95.firebaseapp.com",
    databaseURL: "https://mysterybox-38c95.firebaseio.com",
    projectId: "mysterybox-38c95",
    storageBucket: "mysterybox-38c95.appspot.com",
    messagingSenderId: "142417206962"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    MachinePage,
    PrizePage,
    PurchaseTokenPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageLoader.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    MachinePage,
    PrizePage,
    PurchaseTokenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    NativeAudio,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
