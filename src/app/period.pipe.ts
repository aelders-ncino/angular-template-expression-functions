import { Pipe, PipeTransform } from '@angular/core';
import { JSPeriod } from './period/period.component';

/** This is considered a "pure pipe" because given the same input,
  the output does not change. This is why Angular doesn't need to re-run
  the logic in this pipe, it already knows the output is the same if the
  input has not changed.
*/
@Pipe({
  name: 'period',
})
export class PeriodPipe implements PipeTransform {
  transform(period: JSPeriod): string {
    console.log('period pure pipe was called!');
    return `${period.name} - ${period.month}/${period.year}`;
  }
}
