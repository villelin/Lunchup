import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {PlaceProvider} from "../../providers/place/place";

/**
 * Generated class for the RandomModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-random-modal',
    templateUrl: 'random-modal.html',
})
export class RandomModalPage {

    food: any = [];
    restaurant: string = '';
    restaurant_address: string = '';

    done: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
                public loadingCtrl: LoadingController,
                public placeProvider: PlaceProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RandomModalPage');

        const loader = this.loadingCtrl.create({
            content: 'Arvotaan...',
            duration: 1900,
            spinner: 'crescent'
        });

        loader.onDidDismiss(() => {
            const list = [];

            this.placeProvider.menus.forEach((menu) => {
                const lat = menu.location.latitude;
                const lon = menu.location.longitude;

                if ((this.placeProvider.isNear({latitude: lat, longitude: lon}) || menu.favourite === true) &&
                    menu.items.length > 0) {
                    list.push(menu);
                }
            });

            const restaurant_num = Math.floor(Math.random() * list.length);

            const food_num = Math.floor(Math.random() * list[restaurant_num].items.length);

            this.food = list[restaurant_num].items[food_num].food;
            this.restaurant = list[restaurant_num].name;
            this.restaurant_address = list[restaurant_num].address;

            this.done = true;
        });

        loader.present();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
