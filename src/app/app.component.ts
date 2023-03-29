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

  nameInput: string;

  constructor(private readonly cd: ChangeDetectorRef) {}

  runChangeDetection(): void {
    this.cd.detectChanges();
  }
}
