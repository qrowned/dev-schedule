import {
  Component,
  Inject,
  OnInit,
  LOCALE_ID,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Day, Presenter, Stage, Talk } from 'src/types';
import { NxDialogService, NxModalRef } from '@aposin/ng-aquila/modal';

import { HttpClient } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';

const times = [
  '9:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
  '18:00 - 19:00',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  stages?: Stage[];
  days?: Day[];
  times = times;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private http: HttpClient,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.fetchJsonData();
  }

  fetchJsonData(): void {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.days = data.days;
      this.stages = data.stages;
    });
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
