import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

    apiUrl: string = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDBR94nkQHoIRfDDESusGoaYjXwFiomo1g';

    constructor(public http: HttpClient) {
        console.log('Hello LocationProvider Provider');
    }

    getLocation() {
        return this.http.post(this.apiUrl, null);
    }
}
