import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {MenuModalPage} from "../menu-modal/menu-modal";
import {RandomModalPage} from "../random-modal/random-modal";
import {PlaceProvider} from "../../providers/place/place";

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

    presentMenuModal() {
        let MenuModal = this.modalCtrl.create(MenuModalPage, { userId: 8675309 });
        MenuModal.present();
    }

    presentRandomModal() {
      let randomModal = this.modalCtrl.create(RandomModalPage);
      randomModal.present();
    }

}
