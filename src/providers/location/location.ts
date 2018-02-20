import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

    constructor() {
        console.log('Hello LocationProvider Provider');
    }

    getLocation() {
        return Observable.create(observer => {
            navigator.geolocation.getCurrentPosition((position) => {
                observer.next(position);
                observer.complete();
            });
        });
    }
}
