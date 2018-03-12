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
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
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
import {IonicStorageModule} from "@ionic/storage";
import { UnicafeProvider } from '../providers/unicafe/unicafe';
import {PipesModule} from "../pipes/pipes.module";
import {AllPage} from "../pages/all/all";
import { ImageSearchProvider } from '../providers/image-search/image-search';
import {FoodModalPage} from "../pages/food-modal/food-modal";
import { MapStyleProvider } from '../providers/map-style/map-style';
import { MasonryModule } from 'angular2-masonry';

@NgModule({
    declarations: [
        MyApp,
        NavibotPage,
        FavesPage,
        NearestPage,
        AllPage,
        MapPage,
        MenuModalPage,
        RandomModalPage,
        FoodModalPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        PipesModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBQpwzaKXT7X_0aWMQnqU3uIZXbRIiNPgk'}),
        AgmSnazzyInfoWindowModule,
        HttpClientModule,
        IonicStorageModule.forRoot(),
        MasonryModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        NavibotPage,
        FavesPage,
        NearestPage,
        AllPage,
        MapPage,
        MenuModalPage,
        RandomModalPage,
        FoodModalPage
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
    SubwayProvider,
    UnicafeProvider,
    ImageSearchProvider,
    MapStyleProvider
    ]
})
export class AppModule {
}
