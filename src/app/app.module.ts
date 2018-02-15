import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {NavibotPage} from "../pages/navibot/navibot";
import {FavesPage} from "../pages/faves/faves";
import {NearestPage} from "../pages/nearest/nearest";
import {MapPage} from "../pages/map/map";
import {AgmCoreModule} from "@agm/core";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        NavibotPage,
        FavesPage,
        NearestPage,
        MapPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBQpwzaKXT7X_0aWMQnqU3uIZXbRIiNPgk'})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        NavibotPage,
        FavesPage,
        NearestPage,
        MapPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
