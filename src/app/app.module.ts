import { GMapPage } from './../pages/g-map/g-map';
import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocaialInfoPage } from '../pages/socaial-info/socaial-info';
import { SMS } from '@ionic-native/sms'; 
import { Instagram } from '@ionic-native/instagram';
import {BarcodeScanner} from '@ionic-native/barcode-scanner'
import { Geolocation } from '@ionic-native/geolocation';
import { JsonMenuPage } from '../pages/json-menu/json-menu';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SocaialInfoPage,
    BarcodeScannerPage,
    GMapPage,
    JsonMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SocaialInfoPage,
    BarcodeScannerPage,
    GMapPage,
    JsonMenuPage
  ],
  providers: [

    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Geolocation,Instagram , 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
