import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the ImagePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'image',
})
export class ImagePipe implements PipeTransform {

    baseUrl: string = 'assets/imgs/';

    transform(value: string, ...args) {
        return this.baseUrl + value;
    }
}
