import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PlaceProvider} from "../../providers/place/place";
import {MenuModalPage} from "../menu-modal/menu-modal";

/**
 * Generated class for the AllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-all',
    templateUrl: 'all.html',
})
export class AllPage {

    search_term: string = '';
    showSearch: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public placeProvider: PlaceProvider,
                public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AllPage');
    }

    setSearchTerm(event) {
        this.search_term = event.target.value;
    }


    search(name: string, food: any) {
        if (this.search_term === undefined ||
            this.search_term.length === 0) {
            return true;
        }

        let st = this.search_term.toLowerCase();
        name = name.toLowerCase();


        if (name.includes(st)) {
            return true;
        }

        let food_found = false;
        food.forEach((food_item) => {
            food_item.food.forEach((line) => {
                const text = line.food.toLowerCase();
                if (text.includes(st)) {
                    food_found = true;
                }
            });
        });

        return food_found;
    }

    presentMenuModal(item: object) {
        let MenuModal = this.modalCtrl.create(MenuModalPage, item);
        MenuModal.present();
    }

    toggleShowSearch() {
        this.showSearch = !this.showSearch;
    }
}
