import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {LunchItem} from "../../models/lunchitem";
import {ImageSearchProvider} from "../../providers/image-search/image-search";

/**
 * Generated class for the FoodModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-food-modal',
    templateUrl: 'food-modal.html',
})
export class FoodModalPage {

    food_image: string = '';
    food_name: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
                public imageSearch: ImageSearchProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FoodModalPage');

        const food: LunchItem = this.navParams.get('food');
        this.food_name = food.food[0].food;

        this.imageSearch.getImage(this.food_name).subscribe((response) => {
            this.food_image = response;
        }, (error) => {
            console.log(error);
        });
    }


    dismiss() {
        this.viewCtrl.dismiss();
    }
}
