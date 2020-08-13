import { Pipe, PipeTransform } from '@angular/core';


const SECONDS: number = 1000;
const MINUTES: number = SECONDS * 60;
const HOURS: number = MINUTES * 60;
const DAYS: number = HOURS * 24;


@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let elapsedMilli = Date.now() - value.valueOf();
    if (elapsedMilli < 44 * SECONDS) {
      return 'a few seconds ago';
    } else if (elapsedMilli < 89 * SECONDS) {
      return 'a minute ago';
    } else if (elapsedMilli < 44 * MINUTES) {
      return `${Math.round(elapsedMilli/MINUTES)} minutes ago`;
    } else if (elapsedMilli < 89 * MINUTES) {
      return 'an hour ago';
    } else if (elapsedMilli < 21 * HOURS) {
      return `${Math.round(elapsedMilli/HOURS)} hours ago`;
    } else if (elapsedMilli < 35 * HOURS) {
      return 'a day ago';
    } else if (elapsedMilli < 25 * DAYS) {
      return `${Math.round(elapsedMilli/DAYS)} days ago`;
    } else if (elapsedMilli < 45 * DAYS) {
      return 'a month ago';
    } else if (elapsedMilli < 319 * DAYS) {
      return `${Math.round(elapsedMilli/(DAYS * 30))} months ago`;
    } else if (elapsedMilli < 547 * DAYS) {
      return 'a year ago';
    } else if (elapsedMilli > 548 * DAYS) {
      return `${Math.round(elapsedMilli/(DAYS*365))} years ago`;
    }
    return null;
  }

}
