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
  // Our main data input from the consumer
  @Input() period: JSPeriod;

  // Manual calculation, or property binding
  periodProperty: string;

  // Tracking the amount of calls to each solution
  transformLabelNameCallCount = 0;
  getterCallCount = 0;
  variableCallCount = 0;

  // Using a getter can hide the issue
  get periodName(): string | undefined {
    this.getterCallCount++;

    return this.period.name;
  }

  ngOnInit(): void {
    // Manually set the property for the property binding solution
    this.periodProperty = this.transformLabelName();
    this.variableCallCount++;
  }

  ngOnChanges(change: SimpleChanges): void {
    // Manually update the property when input changes, for the property binding solution
    this.period = change['period'].currentValue;
    this.periodProperty = this.transformLabelName();
  }

  transformLabelName(cdCall: boolean = false): string {
    // Only add to call count if this is called from the template
    if (cdCall) {
      this.transformLabelNameCallCount++;
    }

    return `${this.period.name} - ${this.period.month}/${this.period.year}`;
  }

  /** This is just a simple way of updating the input, because ngOnChanges
    does not detect "deep" changes on properties. Not that necessary for this demo,
    just used for the <input> at the bottom to show how that affects CD cycles.
    */
  updatePeriod(value: any): void {
    this.period = {
      ...this.period,
      name: value,
    };
  }
}
