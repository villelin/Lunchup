///<reference path="../../models/lunchitem.ts"/>
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {LunchMenu} from "../../models/lunchmenu";
import {LunchItem} from "../../models/lunchitem";

/*
  Generated class for the AmicaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AmicaProvider {
    apiUrl: string = "http://www.amica.fi/modules/json/json";

    restaurants = [
        {   name: 'Jamipaja',
            fullname: 'Pop&Jazz Konservatorio Jamipaja',
            id: 3007,
            coords: { latitude: 60.2070978, longitude: 24.9751877 },
            image: 'logo.png'
        }
    ];

    constructor(public http: HttpClient) {
        console.log('Hello AmicaProvider Provider');
    }

    getNumRestaurants() {
        return this.restaurants.length;
    }

    getMenu(restaurant: number) {
        return Observable.create(observer => {
            const id = this.restaurants[restaurant].id;
            this.http.get(`${this.apiUrl}/Index?costNumber=${id}&language=fi`).subscribe((response) => {
                const d = new Date();
                const weekday = d.getDay();

                const name = this.restaurants[restaurant].name;
                const address = this.restaurants[restaurant].fullname;
                const coords = this.restaurants[restaurant].coords;
                const image = this.restaurants[restaurant].image;

                const items = [];

                const l = response['MenusForDays'];

                // etsitään päivän ruoka
                if (l !== undefined) {
                    l.forEach((day) => {
                        if (this.isSameDay(new Date(day['Date']), d)) {
                            const list = day['SetMenus'];

                            // ruokavaihtoehdot
                            list.forEach((item) => {
                                const food_lines = new Array();

                                // yhteen ruokaan liittyvät rivit
                                const lines = item['Components'];
                                lines.forEach((line) => {
                                    // allergeenit sulkujen sisältä
                                    const regExp = /\(([^)]+)\)/;
                                    const matches = regExp.exec(line);

                                    // poista sulkujen sisukset
                                    const food = line.replace(matches[0], '');

                                    // lisätään rivi ruokaan
                                    food_lines.push({food: food, diets: matches[1]});
                                });

                                // ruoka listaan
                                const food = new LunchItem(food_lines);
                                items.push(food);
                            });
                        }
                    });
                }

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

    isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }
}
