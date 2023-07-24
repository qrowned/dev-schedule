import { Component, Inject, LOCALE_ID, WritableSignal } from '@angular/core';
import { Day, Stage } from 'src/types';

import { DatePipe, formatDate } from '@angular/common';
import { DataService } from './data.service';
import { NxIconRegistry } from '@aposin/ng-aquila/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stages: WritableSignal<Stage[]>;
  days: WritableSignal<Day[]>;
  times: string[];

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private datePipe: DatePipe,
    private dataService: DataService,
    private readonly nxIconRegistry: NxIconRegistry
  ) {
    this.stages = this.dataService.stages;
    this.days = this.dataService.days;
    this.times = this.dataService.times;

    this.nxIconRegistry.registerFont('fa', 'fa', 'fa-');
  }

  formatCurrentDate(day: Day): string {
    return (
      this.datePipe.transform(day.date, 'EEE') +
      ', ' +
      formatDate(day.date, 'dd.MM.yyyy', this.locale)
    );
  }
}

/** Copyright Allianz 2023 */
