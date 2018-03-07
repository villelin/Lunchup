import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LunchItem} from "../../models/lunchitem";
import {LunchMenu} from "../../models/lunchmenu";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the UnicafeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnicafeProvider {

    apiUrl: string = 'https://messi.hyyravintolat.fi/publicapi/restaurant';

    restaurants = [
        {
            name: 'Unicafe',
            fullname: 'Chemicum',
            id: 10,
            coords: { latitude: 60.2056201, longitude: 24.9638826 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Exactum',
            id: 11,
            coords: { latitude: 60.2044059, longitude: 24.9618287 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Physicum',
            id: 12,
            coords: { latitude: 60.2050047, longitude: 24.9629559 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Cafe Portaali',
            id: 5,
            coords: { latitude: 60.1700021, longitude: 24.9470383 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Metsätalo',
            id: 1,
            coords: { latitude: 60.1725053, longitude: 24.9492142 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Olivia',
            id: 2,
            coords: { latitude: 60.1755349, longitude: 24.9532758 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Pesco&Vege Topelias',
            id: 7,
            coords: { latitude: 60.1718285, longitude: 24.9496427 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Porthania',
            id: 39,
            coords: { latitude: 60.1700641, longitude: 24.9487938 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Päärakennus',
            id: 4,
            coords: { latitude: 60.169454, longitude: 24.9499478 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Ravintola Fredrika',
            id: 32,
            coords: { latitude: 60.1692282, longitude: 24.9499826 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Ravintola Oliver',
            id: 37,
            coords: { latitude: 60.1750161, longitude: 24.9536897 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Ravintola Serpens',
            id: 33,
            coords: { latitude: 60.1814336, longitude: 24.9209062 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Rotunda',
            id: 38,
            coords: { latitude: 60.1703376, longitude: 24.9506436 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Soc&Kom',
            id: 15,
            coords: { latitude: 60.1730569, longitude: 24.9525154 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'WELL Kaisa-talo',
            id: 31,
            coords: { latitude: 60.1712382, longitude: 24.9480475 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'WELL Ylioppilasaukio',
            id: 43,
            coords: { latitude: 60.1694107, longitude: 24.9408665 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Ylioppilasaukio',
            id: 9,
            coords: { latitude: 60.1692949, longitude: 24.9406922 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Meilahti',
            id: 13,
            coords: { latitude: 60.1906034, longitude: 24.9091575 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Ruskeasuo',
            id: 14,
            coords: { latitude: 60.205791, longitude: 24.8975375 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'WELL Terkko',
            id: 42,
            coords: { latitude: 60.190711, longitude: 24.9071953},
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Biokeskus',
            id: 16,
            coords: { latitude: 60.2272909, longitude: 25.0139809 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Korona',
            id: 17,
            coords: { latitude: 60.227532, longitude: 25.013139 },
            image: 'logo.png'
        },
        {
            name: 'Unicafe',
            fullname: 'Viikuna',
            id: 18,
            coords: { latitude: 60.229297, longitude: 25.0218129 },
            image: 'logo.png'
        }
    ];

    constructor(public http: HttpClient) {
        console.log('Hello UnicafeProvider Provider');
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
            const address = this.restaurants[restaurant].fullname;
            const coords = this.restaurants[restaurant].coords;
            const image = this.restaurants[restaurant].image;
            const name = this.restaurants[restaurant].name;

            this.http.get(`${this.apiUrl}/${id}`).subscribe((response) => {

                const current_date = `${this.formatNumber(d.getDate())}.${this.formatNumber(d.getMonth()+1)}`;

                const items = new Array();

                // etsitään päivä
                response['data'].forEach((daymenu) => {
                    if (daymenu.date.includes(current_date)) {
                        const list = daymenu.data;

                        list.forEach((item) => {
                            const food = new LunchItem([{food: item.name, diets: item.meta[0]}]);
                            items.push(food);
                        });
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
