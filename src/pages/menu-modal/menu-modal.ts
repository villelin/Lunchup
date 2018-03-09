import {Component} from '@angular/core';
import {IonicPage, Loading, NavController, NavParams, ViewController} from 'ionic-angular';
import {LunchMenu} from "../../models/lunchmenu";
import {LunchItem} from "../../models/lunchitem";
import {LocationProvider} from "../../providers/location/location";
import {MapStyleProvider} from "../../providers/map-style/map-style";

/**
 * Generated class for the MenuModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-menu-modal',
    templateUrl: 'menu-modal.html',
})
export class MenuModalPage {

    name: string = '';
    address: string = '';
    items: LunchItem[] = [];
    menu_image: string = '';

    latitude: number = 0;
    longitude: number = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
                public locationProvider: LocationProvider, public mapStyle: MapStyleProvider) {
        const menu: LunchMenu = navParams.get('menu');
        if (menu !== undefined) {
            this.name = menu.name;
            this.address = menu.address;
            this.items = menu.items;
            this.menu_image = menu.image;

            this.latitude = menu.location.latitude;
            this.longitude = menu.location.longitude;
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuModalPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
