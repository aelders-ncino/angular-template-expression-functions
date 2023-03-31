import { ChangeDetectorRef, Component } from '@angular/core';
import { JSPeriod } from './period/period.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  period: JSPeriod = {
    apexType: 'LifeCycleSpreadStatementPeriod',
    name: 'Balance Sheet',
    month: 12,
    year: 2023,
  };

  constructor(private readonly cd: ChangeDetectorRef) {}

  /** This could also be placed inside the period component, but
    this also demonstrates that CD happening in a parent will cause
    issues in the child component.
  */
  runChangeDetection(): void {
    this.cd.detectChanges();
  }
}
