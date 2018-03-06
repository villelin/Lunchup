import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ImageSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageSearchProvider {

    apiUrl: string = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search';
    apiKey: string = 'ece466bd85694fea9515e803371d2efa';

    constructor(public http: HttpClient) {
        console.log('Hello ImageSearchProvider Provider');
    }

    getImage(food_name: string) {
        return Observable.create(observer => {

            this.http.get('assets/pasta.json').subscribe((response) => {

                const values = response['value'];

                if (values.length > 0) {
                    const first = values[0];
                    console.log(first);

                    observer.next(first.contentUrl);
                } else {
                    observer.next('assets/imgs/logo.png');
                }

                observer.complete();
            }, (error) => {
                observer.complete();
            });


            /*
            const headers = {headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', this.apiKey)};

            this.http.get(`${this.apiUrl}?q="${food_name}"&where=fi-fi`, headers).subscribe((response) => {
                console.log(response);
                const values = response['value'];

                if (values.length > 0) {
                    const first = values[0];
                    console.log(first);

                    observer.next(first.contentUrl);
                } else {
                    observer.next('assets/imgs/logo.png');
                }

                observer.complete();
            }, (error) => {
                observer.complete();
            });
            */
        });
    }
}
