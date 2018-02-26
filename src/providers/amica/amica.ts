import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

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

                const menu: object = [];
                menu['name'] = response['RestaurantName'];

                const list = response['MenusForDays'][day-1]['SetMenus'];

                const items = new Array();
                list.forEach((item) => {
                    items.push(item['Components']);
                });

                menu['list'] = items;
                
                observer.next(menu);
                observer.complete();
            }, (error) => {
                console.log(error);
                observer.complete();
            });
        });
    }

}
