import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PlaceProvider} from "../../providers/place/place";
import {Storage} from "@ionic/storage";

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

    images: any = [];

    search_term: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, public placeProvider: PlaceProvider,
                public storage: Storage) {
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
            'https://www.placecage.com/g/200/300',

        ];
    }

    setSearchTerm(event){
        this.search_term = event.target.value;
    }


    search(name: string, food: any) {
        if (this.search_term.length === 0)
            return true;

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
}