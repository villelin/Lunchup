import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {LunchMenu} from "../../models/lunchmenu";
import {LunchItem} from "../../models/lunchitem";

/*
  Generated class for the LaureaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LaureaProvider {
    apiUrl: string = 'http://users.metropolia.fi/~villelin/laurea-api';

    restaurant = {
        name: 'BarLaurea',
        fullname: 'Vanha Maantie 9',
        coords: { latitude: 60.2227004, longitude: 24.8048904 },
        image: 'logo.png'
    };

    constructor(public http: HttpClient) {
        console.log('Hello LaureaProvider Provider');
    }

    getMenu() {
        return Observable.create(observer => {
            this.http.get(this.apiUrl).subscribe((response: any) => {
                //console.log(response);

                const items = new Array();

                // ruokavaihtoehdot
                response.forEach((item) => {
                    const food_lines = new Array();

                    // yhteen ruokaan liittyvät rivit
                    item.forEach((line) => {
                        // lisätään rivi ruokaan
                        food_lines.push({ food: line['item'], diets: line['diets'] });
                    });

                    // ruoka listaan
                    const food = new LunchItem(food_lines);
                    items.push(food);
                });

                const menu = new LunchMenu(this.restaurant.name, this.restaurant.fullname, items, this.restaurant.coords, this.restaurant.image);

                observer.next(menu);
                observer.complete();
            }, (error) => {
                console.log(error);
                observer.complete();
            })
        });
    }

}
