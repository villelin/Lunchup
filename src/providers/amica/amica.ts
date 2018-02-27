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

    constructor(public http: HttpClient) {
        console.log('Hello AmicaProvider Provider');
    }

    getMenu(restaurant: number) {
        return Observable.create(observer => {
            this.http.get(`${this.apiUrl}/Index?costNumber=${restaurant}&language=fi`).subscribe((response) => {
                const d = new Date();
                const day = d.getDay();


                const name = response['RestaurantName'];
                const address = "Osoite tulee tähän";
                const coords = { latitude: 0, longitude: 0 };   // laita koordinaatit

                const list = response['MenusForDays'][day-1]['SetMenus'];

                const items = new Array();

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
                        food_lines.push({ food: food, diets: matches[1] });
                    });

                    // ruoka listaan
                    const food = new LunchItem(food_lines);
                    items.push(food);
                });

                const menu = new LunchMenu(name, address, items, coords);

                observer.next(menu);
                observer.complete();
            }, (error) => {
                console.log(error);
                observer.complete();
            });
        });
    }

}
