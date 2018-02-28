import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Geolocation} from '@ionic-native/geolocation';

import {MyApp} from './app.component';
import {NavibotPage} from "../pages/navibot/navibot";
import {FavesPage} from "../pages/faves/faves";
import {NearestPage} from "../pages/nearest/nearest";
import {MapPage} from "../pages/map/map";
import {AgmCoreModule} from "@agm/core";
import { LocationProvider } from '../providers/location/location';
import {HttpClientModule} from "@angular/common/http";
import { AmicaProvider } from '../providers/amica/amica';
import { SodexoProvider } from '../providers/sodexo/sodexo';
import { WikipediaProvider } from '../providers/wikipedia/wikipedia';
import { PlaceProvider } from '../providers/place/place';
import { LaureaProvider } from '../providers/laurea/laurea';
import { SubwayProvider } from '../providers/subway/subway';
import {MenuModalPage} from "../pages/menu-modal/menu-modal";
import {RandomModalPage} from "../pages/random-modal/random-modal";

@NgModule({
    declarations: [
        MyApp,
        NavibotPage,
        FavesPage,
        NearestPage,
        MapPage,
        MenuModalPage,
        RandomModalPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBQpwzaKXT7X_0aWMQnqU3uIZXbRIiNPgk'}),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        NavibotPage,
        FavesPage,
        NearestPage,
        MapPage,
        MenuModalPage,
        RandomModalPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Geolocation,
    LocationProvider,
    AmicaProvider,
    SodexoProvider,
    WikipediaProvider,
    PlaceProvider,
    LaureaProvider,
    SubwayProvider
    ]
})
export class AppModule {
}
