import { Pipe, PipeTransform } from '@angular/core';
// import * as moment from 'moment';
/**
 * Generated class for the FirstCapsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'firstCaps',
})
export class FirstCapsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return value.charAt(0).toUpperCase();
  }


}

// @Pipe({name: 'datex'})
// export class DatexPipe implements PipeTransform {
//    transform(value: any ,format:string): string {      
//        var momentDate = moment(value);
//        // If moment didn't understand the value, return it unformatted.
//        if (!momentDate.isValid()) return value;
//        // Otherwise, return the date formatted as requested.
//        return momentDate.format(format);
//    }
// }