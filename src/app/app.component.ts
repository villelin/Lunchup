import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {NavibotPage} from "../pages/navibot/navibot";
import {AmicaProvider} from "../providers/amica/amica";
import {LunchMenu} from "../models/lunchmenu";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = NavibotPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, amicaProvider: AmicaProvider) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

