import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

export interface JSPeriod {
  apexType?: string;
  name?: string;
  statement?: string;
  numberOfPeriods?: number;
  month?: number;
  year?: number;
  analyst?: string;
}

// Add `changeDetection: ChangeDetectionStrategy.OnPush` to this component to see
// how the OnPush strategy affects the CD calls
@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css'],
})
export class PeriodComponent implements OnInit, OnChanges {
  @Input() period: JSPeriod;

  periodProperty: string;

  transformLabelNameCallCount = 0;
  getterCallCount = 0;
  variableCallCount = 0;

  ngOnInit(): void {
    this.periodProperty = this.transformLabelName();
    this.variableCallCount++;
  }

  ngOnChanges(change: SimpleChanges): void {
    this.period = change['period'].currentValue;
    this.periodProperty = this.transformLabelName();
  }

  transformLabelName(cdCall: boolean = false): string {
    if (cdCall) {
      this.transformLabelNameCallCount++;
    }

    return `${this.period.name} - ${this.period.month}/${this.period.year}`;
  }

  updatePeriod(value: any): void {
    this.period = {
      ...this.period,
      name: value,
    };
  }

  get periodName(): string | undefined {
    this.getterCallCount++;

    return this.period.name;
  }
}
