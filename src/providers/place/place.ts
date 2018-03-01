import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LunchMenu} from "../../models/lunchmenu";
import {AmicaProvider} from "../amica/amica";
import {LaureaProvider} from "../laurea/laurea";
import {forkJoin} from "rxjs/observable/forkJoin";
import {SubwayProvider} from "../subway/subway";
import {LocationProvider} from "../location/location";

/*
  Generated class for the PlaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceProvider {

    menus = new Array();

    nearest_menus = new Array();

    constructor(public http: HttpClient,
                public locationProvider: LocationProvider,
                public amicaProvider: AmicaProvider,
                public laureaProvider: LaureaProvider,
                public subwayProvider: SubwayProvider) {
        console.log('Hello PlaceProvider Provider');

        let restaurants = [];
        restaurants.push(this.amicaProvider.getMenu(0));
        restaurants.push(this.laureaProvider.getMenu());
        for (let i=0; i < this.subwayProvider.getNumRestaurants(); i++) {
            restaurants.push(this.subwayProvider.getMenu(i));
        }

        forkJoin(restaurants).subscribe((results) => {
            results.forEach((result) => {
                this.menus.push(result);
            });
        }, (error) => {
            console.log(error);
        }, () => {
            this.locationProvider.getLocation().subscribe((response) => {
                const latitude = response['coords'].latitude;
                const longitude = response['coords'].longitude;

                // etsitään lähimmät
                this.menus.forEach((item) => {
                    const place_lat = item.location.latitude;
                    const place_lon = item.location.longitude;

                    const distance = this.haversineDistance(latitude, longitude, place_lat, place_lon);

                    // lisää jos etäisyys < 1333 metriä
                    if (distance <= 1333) {
                        this.nearest_menus.push(item);
                    }
                });
            });
        });
    }

    toRadians(degrees)
    {
        var pi = Math.PI;
        return degrees * (pi/180);
    }

    haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
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
