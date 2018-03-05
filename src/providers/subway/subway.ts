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
        {
            name: "Subway",
            fullname: "Jätkäsaari",
            coords: { latitude: 60.1563113, longitude: 24.9212361 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Ruoholahti",
            coords: { latitude: 60.163655, longitude: 24.9113461 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Kluuvi",
            coords: { latitude: 60.163655, longitude: 24.9113461 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Kaisaniemi",
            coords: { latitude: 60.1715774, longitude: 24.9472348 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Mannerheimintie",
            coords: { latitude: 60.1808961, longitude: 24.9274749 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Porthaninkatu",
            coords: { latitude: 60.1823502, longitude: 24.9521318 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Sörnäisten rantatie",
            coords: { latitude: 60.1831564, longitude: 24.9629599 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Teollisuuskatu",
            coords: { latitude: 60.19429, longitude: 24.9477558 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Mäkelänkatu",
            coords: { latitude: 60.1950419, longitude: 24.9565078 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Pasilan asema",
            coords: { latitude: 60.1987986, longitude: 24.9339645 },
            image: 'logo.png'
        },
        {
            name: "Subway",
            fullname: "Tullinpuomi",
            coords: { latitude: 60.1921348, longitude: 24.9097241 },
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
            const weekend = false;

            const menu = new LunchMenu(name, address, [item], coords, image, weekend);

            observer.next(menu);
            observer.complete();
        });
    }

}
