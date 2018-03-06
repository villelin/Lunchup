import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PlaceProvider} from "../../providers/place/place";
import {Storage} from "@ionic/storage";
import {MenuModalPage} from "../menu-modal/menu-modal";

/**
 * Generated class for the NearestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-nearest',
    templateUrl: 'nearest.html',
})
export class NearestPage {


    constructor(public navCtrl: NavController, public navParams: NavParams, public placeProvider: PlaceProvider,
                public storage: Storage, public modalCtrl: ModalController) {
    }

    presentMenuModal(item: object) {
        let MenuModal = this.modalCtrl.create(MenuModalPage, item);
        MenuModal.present();
    }


}