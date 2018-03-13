import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {MenuModalPage} from "../menu-modal/menu-modal";
import {RandomModalPage} from "../random-modal/random-modal";
import {PlaceProvider} from "../../providers/place/place";
import {FoodModalPage} from "../food-modal/food-modal";
import {MasonryOptions} from "angular2-masonry";

/**
 * Generated class for the FavesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-faves',
    templateUrl: 'faves.html',
})
export class FavesPage {
    images: any = [];

    public masonryOptions: MasonryOptions = {
        transitionDuration: '0.8s',
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
                public placeProvider: PlaceProvider) {

        this.images = [
            'https://www.placecage.com/g/200/1000',
            'https://www.placecage.com/g/200/300',
            'https://www.placecage.com/g/200/100',
            'https://www.placecage.com/g/200/300',
            'https://www.placecage.com/g/200/300',
            'https://www.placecage.com/g/200/1000',
            'https://www.placecage.com/g/200/300',
            'https://www.placecage.com/g/200/100',
            'https://www.placecage.com/g/200/300',
            'https://www.placecage.com/g/200/300'

        ];

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FavesPage');
    }

    presentMenuModal(item: object) {
        console.log(item);
        let MenuModal = this.modalCtrl.create(MenuModalPage, item);
        MenuModal.present();
    }

    presentRandomModal() {
        let randomModal = this.modalCtrl.create(RandomModalPage);
        randomModal.present();
    }

    presentFoodModal(food: object) {
        let foodModal = this.modalCtrl.create(FoodModalPage, food);
        foodModal.present();
    }

}
