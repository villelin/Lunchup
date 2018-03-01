import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {NavibotPage} from "../pages/navibot/navibot";
import {Storage} from '@ionic/storage';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = NavibotPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            storage.get('favourites').then((value) => {
                if (value === null) {
                    storage.set('favourites', []);
                }
            });
        });
    }
}

