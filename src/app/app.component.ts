import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';
import { Day, Stage, Talk } from 'src/types';

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

  // Fetch every talks from the stages variable which happen on a certain day and return them as an array
  getTalksByDay(day: Day): Talk[] | undefined {
    return this.stages
      ?.map((stage) => stage.talks)
      .flat()
      .filter((talk) => {
        try {
          let dayId: string = talk.time.split(',')[0].split(' ')[1];
          return dayId === day.id.toString();
        } catch (error) {
          return;
        }
      });
  }

  getTalkByStageAndTime(
    stage: Stage,
    day: Day,
    time: string
  ): Talk | undefined {
    return stage.talks
      .filter((talk) => {
        try {
          let dayId: string = talk.time.split(',')[0].split(' ')[1];
          return dayId === day.id.toString();
        } catch (error) {
          return;
        }
      })
      .find((talk) => talk.time.includes(time));
  }
}

/** Copyright Allianz 2023 */
