import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';
import { Day, Stage, Talk } from 'src/types';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  stages?: Stage[];
  days?: Day[];
  currentDay?: Day;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private http: HttpClient,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.fetchJsonData();
  }

  fetchJsonData(): void {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.days = data.days;
      this.stages = data.stages;

      this.route.queryParamMap.subscribe((params) => {
        const id: string | null = params.get('id');
        const day: Day | undefined = this.days?.find(
          (day) => day.id.toString() == id
        );
        this.currentDay = day ? day : this.days?.at(0);
      });
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
