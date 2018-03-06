import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FavesPage} from "../faves/faves";
import {NearestPage} from "../nearest/nearest";
import {MapPage} from "../map/map";
import {AllPage} from "../all/all";

/**
 * Generated class for the NavibotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    templateUrl: 'navibot.html',
})
export class NavibotPage {

    tab1Root = FavesPage;
    tab2Root = NearestPage;
    tab3Root = AllPage;
    tab4Root = MapPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NavibotPage');
    }

}
