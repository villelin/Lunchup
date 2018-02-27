import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LunchMenu} from "../../models/lunchmenu";
import {AmicaProvider} from "../amica/amica";

/*
  Generated class for the PlaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceProvider {

    menus = new Array();

    constructor(public http: HttpClient, public amicaProvider: AmicaProvider) {
        console.log('Hello PlaceProvider Provider');

        amicaProvider.getMenu(3007).subscribe((response) => {
            //console.log(response);
            this.menus.push(response);

            console.log(this.menus);
        });
    }

}
