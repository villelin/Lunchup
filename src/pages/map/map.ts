import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {LocationProvider} from "../../providers/location/location";
import {PlaceProvider} from "../../providers/place/place";
import {MenuModalPage} from "../menu-modal/menu-modal";
import {MapStyleProvider} from "../../providers/map-style/map-style";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {

    latitude: number = 0;
    longitude: number = 0;

    showSearch: boolean = false;
    searchTerm: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, private locationProvider: LocationProvider,
                public placeProvider: PlaceProvider, public modalCtrl: ModalController, public mapStyle: MapStyleProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');


        this.locationProvider.getLocation().subscribe((response) => {
            this.latitude = response['coords'].latitude;
            this.longitude = response['coords'].longitude;
            console.log(`lat = ${this.latitude}, lon = ${this.longitude}`);
        }, (error) => {
            console.log(error);
        });
    }

    setSearchTerm(event) {
        this.searchTerm = event.target.value;
    }


    search(name: string, address: string) {
        if (this.searchTerm === undefined ||
            this.searchTerm.length === 0) {
            return true;
        } else {
            let st = this.searchTerm.toLowerCase();
            name = name.toLowerCase();
            address = address.toLowerCase();

            if (name.includes(st)) {
                return true;
            } else if (address.includes(st)) {
                return true;
            } else {
                return false;
            }
        }
    }

    markerClick(item: object) {
        let MenuModal = this.modalCtrl.create(MenuModalPage, {menu: item, showMap: false, showMenu: true});
        MenuModal.present();
    }

    toggleShowSearch() {
        this.showSearch = !this.showSearch;
    }
}
