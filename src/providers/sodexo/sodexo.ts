import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {LunchItem} from "../../models/lunchitem";
import {LunchMenu} from "../../models/lunchmenu";
import {calcPossibleSecurityContexts} from "@angular/compiler/src/template_parser/binding_parser";

/*
  Generated class for the SodexoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SodexoProvider {

    apiUrl: string = 'https://www.sodexo.fi/ruokalistat/output/daily_json';

    restaurants = [
        {
            name: 'Sodexo',
            fullname: 'Vanha Maantie 6',
            id: 16435,
            coords: {latitude: 60.2208876, longitude: 24.8049805},
            image: 'logo.png'
        }
    ];

    constructor(public http: HttpClient) {
        console.log('Hello SodexoProvider Provider');
    }

    formatNumber(number) {
        return (number < 10 ? '0' : '') + number;
    }

    getNumRestaurants() {
        return this.restaurants.length;
    }

    getMenu(restaurant: number) {
        return Observable.create(observer => {
            const d = new Date();
            const weekday = d.getDay();

            const id = this.restaurants[restaurant].id;
            const year = d.getFullYear();
            const month = this.formatNumber(d.getMonth() + 1);
            const day = this.formatNumber(d.getDate());
            const language = 'fi';

            this.http.get(`${this.apiUrl}/${id}/${year}/${month}/${day}/${language}`).subscribe((response) => {

                const name = this.restaurants[restaurant].name;
                const address = this.restaurants[restaurant].fullname;
                const coords = this.restaurants[restaurant].coords;
                const image = this.restaurants[restaurant].image;

                const items = new Array();
                const list = response['courses'];
                list.forEach((item) => {
                    const food = new LunchItem([{food: item.title_fi, diets: item.properties}]);
                    items.push(food);
                });

                let weekend = false;
                if (weekday === 0 || weekday === 6) {
                    weekend = true;
                }

                const menu = new LunchMenu(name, address, items, coords, image, weekend);

                observer.next(menu);
                observer.complete();
            }, (error) => {
                console.log(error);
                observer.complete();
            });
        });
    }
}
