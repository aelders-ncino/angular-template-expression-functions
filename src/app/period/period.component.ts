import { Component, Input } from '@angular/core';

export interface JSPeriod {
  apexType?: string;
  name?: string;
  statement?: string;
  numberOfPeriods?: number;
  month?: number;
  year?: number;
  analyst?: string;
}

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css'],
})
export class PeriodComponent {
  @Input()
  period: JSPeriod;

  transformLabelNameCallCount = 0;
  getterCallCount = 0;

  transformLabelName(): string {
    console.log(
      `transformLabelName called ${++this.transformLabelNameCallCount} times!`
    );

    return `${this.period.name} - ${this.period.month}/${this.period.year}`;
  }

  get periodName(): string | undefined {
    this.getterCallCount++;

    return this.period.name;
  }
}
