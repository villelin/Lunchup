import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Geolocation} from '@ionic-native/geolocation';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

    constructor(private geoLocation: Geolocation) {
        console.log('Hello LocationProvider Provider');
    }

    getLocation() {
        return Observable.create(observer => {

            // TILAPÄISRATKAISU

            /*
            this.geoLocation.getCurrentPosition({timeout: 30000}).then((position) => {
                console.log(position);
                observer.next(position);
                observer.complete();
            });
            */

            observer.next( {coords: { latitude: 60.2186027, longitude: 24.8106266}});
            observer.complete();
        });
    }
}
