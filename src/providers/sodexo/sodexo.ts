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
        }, {
            name: 'Sodexo',
            fullname: 'Agricola',
            id: 16361,
            coords: {latitude: 60.184443, longitude: 24.956361},
            image: 'logo.png'
        }, {
            name: 'Sodexo',
            fullname: 'Albert',
            id: 16362,
            coords: {latitude: 60.1653991, longitude: 24.9312884},
            image: 'logo.png'
        }, {
            name: 'Sodexo',
            fullname: 'Bulevardi',
            id: 16363,
            coords: {latitude: 60.1630785, longitude: 24.9313413},
            image: 'logo.png'
        }, {
            name: 'Sodexo',
            fullname: 'Hämeentie',
            id: 16364,
            coords: {latitude: 60.2146143, longitude: 24.9808086},
            image: 'logo.png'
        }, {
            name: 'Sodexo',
            fullname: 'Leiritie',
            id: 16365,
            coords: {latitude: 60.2585858, longitude: 24.8455811},
            image: 'logo.png'
        }, {
            name: 'Sodexo',
            fullname: 'Onnentie',
            id: 16432,
            coords: {latitude: 60.2197989, longitude: 24.9567841},
            image: 'logo.png'
        }, {
            name: 'Sodexo',
            fullname: 'Sofianlehto',
            id: 16433,
            coords: {latitude: 60.2042063, longitude: 24.9506807},
            image: 'logo.png'
        }, {
            name: 'Sodexo',
            fullname: 'Tukholmankatu',
            id: 16434,
            coords: {latitude: 60.1912458, longitude: 24.9020872},
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
                    const regexp = /[0-9]\,[0-9][0-9]/;
                    const prices = regexp.exec(item.price);

                    // lisää vain yli euron ruoat
                    if (parseFloat(prices[0]) >= 1.0) {
                        const food = new LunchItem([{food: item.title_fi, diets: item.properties}]);
                        items.push(food);
                    }
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
