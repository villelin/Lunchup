import { Component } from '@angular/core';
import {IonicPage, Loading, NavController, NavParams, ViewController} from 'ionic-angular';

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

  ruokala: string = '';
  ruokala_osoite: string = '';
  //ruokala_kuva: any [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuModalPage');
  }

    dismiss() {
        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }

}
