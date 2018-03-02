import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AmicaProvider} from "../amica/amica";
import {LaureaProvider} from "../laurea/laurea";
import {forkJoin} from "rxjs/observable/forkJoin";
import {SubwayProvider} from "../subway/subway";
import {LocationProvider} from "../location/location";
import {Storage} from "@ionic/storage";
import {SodexoProvider} from "../sodexo/sodexo";

/*
  Generated class for the PlaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceProvider {

    menus = new Array();

    constructor(public http: HttpClient,
                public storage: Storage,
                public locationProvider: LocationProvider,
                public amicaProvider: AmicaProvider,
                public laureaProvider: LaureaProvider,
                public subwayProvider: SubwayProvider,
                public sodexoProvider: SodexoProvider) {
        console.log('Hello PlaceProvider Provider');

        let restaurants = [];
        for (let i=0; i < this.amicaProvider.getNumRestaurants(); i++) {
            restaurants.push(this.amicaProvider.getMenu(0));
        }
        for (let i=0; i < this.sodexoProvider.getNumRestaurants(); i++) {
            restaurants.push(this.sodexoProvider.getMenu(0));
        }
        for (let i=0; i < this.subwayProvider.getNumRestaurants(); i++) {
            restaurants.push(this.subwayProvider.getMenu(i));
        }
        restaurants.push(this.laureaProvider.getMenu());

        forkJoin(restaurants).subscribe((results) => {
            results.forEach((result) => {
                this.menus.push(result);
            });
        }, (error) => {
            console.log(error);
        }, () => {
            // hae suosikit
            //this.storage.get('favourites').then((value) => {
            this.storage.forEach((value, key) => {

                this.menus.forEach((item, index) => {
                    const name = item.name+item.address;
                    if (name === key) {
                        this.menus[index].favourite = true;
                    }
                });

            });
        });
    }

    addFavourite(name: string, address: string) {
        const key = name+address;

        this.storage.get(key).then((value) => {
            if (value === null) {
                // ei löytynyt
                this.storage.set(key, 'true');

                // lisää taulukoihin
                this.menus.forEach((item, index) => {
                    if (item.name === name && item.address === address) {
                        this.menus[index].favourite = true;
                    }
                });
            }
        });
    }

    removeFavourite(name: string, address: string) {
        const key = name+address;

        this.storage.get(key).then((value) => {
            if (value !== null) {
                this.storage.remove(key);

                // poista taulukoista
                this.menus.forEach((item, index) => {
                    if (item.name === name && item.address === address) {
                        this.menus[index].favourite = false;
                    }
                });
            }
        })
    }




    toRadians(degrees)
    {
        var pi = Math.PI;
        return degrees * (pi/180);
    }

    public haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
        const r = 6371e3; // maapallon halkaisija metreinä
        const φ1 = this.toRadians(lat1);
        const φ2 = this.toRadians(lat2);
        const Δφ = this.toRadians(lat2-lat1);
        const Δλ = this.toRadians(lon2-lon1);

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return  r * c;
    }

}
