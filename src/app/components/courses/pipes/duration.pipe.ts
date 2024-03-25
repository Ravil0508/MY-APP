import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  time ="";
  transform(duration: number): string {
    const hour = Math.trunc(duration/60);
    const min = duration - (hour*60);
    if (hour>0) {
      this.time = `${hour} ч ${min} мин`;
    }
    else{
      this.time = `${min} мин`;
    }
    return this.time;
  }

}
