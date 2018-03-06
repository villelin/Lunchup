import {Component} from '@angular/core';
import {IonicPage, Loading, NavController, NavParams, ViewController} from 'ionic-angular';
import {LunchMenu} from "../../models/lunchmenu";

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

    menu: LunchMenu;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.menu = navParams.get('menu');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuModalPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
