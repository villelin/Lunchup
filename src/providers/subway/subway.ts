import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LunchItem} from "../../models/lunchitem";
import {LunchMenu} from "../../models/lunchmenu";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the SubwayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubwayProvider {

    daily_sub = [
        {
            name: 'Kana Fajita'
        }, {
            name: 'Tonnikala'
        }, {
            name: 'Kananrinta'
        }, {
            name: 'Italian B.M.T.®'
        }, {
            name: 'Vegan Delite'
        }, {
            name: 'American Steakhouse Melt'
        }, {
            name: 'Kinkku'
        }
    ];

    restaurants = [
        {
            name: "Subway Sello",
            fullname: "Sellon osoite",
            coords: { latitude: 60.2184236, longitude: 24.8121317 }
        }
    ];

    constructor(public http: HttpClient) {
        console.log('Hello SubwayProvider Provider');
    }

    getMenu(restaurant: number) {
        return Observable.create(observer => {
            const d = new Date();
            const day = d.getDay();

            const name = this.restaurants[restaurant].name;
            const address = this.restaurants[restaurant].fullname;
            const coords = this.restaurants[restaurant].coords;

            const item = new LunchItem([{food: `Päivän subi: ${this.daily_sub[day-1].name}`, diets: ''}]);

            const menu = new LunchMenu(name, address, [item], coords);

            observer.next(menu);
            observer.complete();
        });
    }

}
