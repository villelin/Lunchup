import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

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

}
