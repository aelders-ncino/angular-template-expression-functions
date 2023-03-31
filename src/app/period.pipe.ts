import { Pipe, PipeTransform } from '@angular/core';
import { JSPeriod } from './period/period.component';

@Pipe({
  name: 'period',
})
export class PeriodPipe implements PipeTransform {
  transform(period: JSPeriod): string {
    console.log('period pure pipe was called!');
    return `${period.name} - ${period.month}/${period.year}`;
  }
}
