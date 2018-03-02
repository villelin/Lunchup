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
            name: "Subway",
            fullname: "Sello",
            coords: { latitude: 60.2184236, longitude: 24.8121317 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Lönnrotinkatu",
            coords: { latitude: 60.1636791, longitude: 24.9293261 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Isoroobertinkatu",
            coords: { latitude: 60.162284, longitude: 24.9380575 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Forum",
            coords: { latitude: 60.1681491, longitude: 24.9359927 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Citycenter",
            coords: { latitude: 60.1698665, longitude: 24.9413462 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Kaivopiha",
            coords: { latitude: 60.1693185, longitude: 24.939934 },
            image: 'logo.png'
        },
    ];

    constructor(public http: HttpClient) {
        console.log('Hello SubwayProvider Provider');
    }

    getNumRestaurants() {
        return this.restaurants.length;
    }

    getMenu(restaurant: number) {
        return Observable.create(observer => {
            const d = new Date();
            const day = d.getDay() - 1;

            const name = this.restaurants[restaurant].name;
            const address = this.restaurants[restaurant].fullname;
            const coords = this.restaurants[restaurant].coords;
            const image = this.restaurants[restaurant].image;

            const item = new LunchItem([{food: `Päivän subi: ${this.daily_sub[day].name}`, diets: ''}]);

            const menu = new LunchMenu(name, address, [item], coords, image);

            observer.next(menu);
            observer.complete();
        });
    }

}
