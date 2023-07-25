import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Day, Stage } from 'src/types';

const times = [
  '09:00 - 10:00',
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

@Injectable({
  providedIn: 'root',
})
export class DataService {
  stages: WritableSignal<Stage[]> = signal([]);
  days: WritableSignal<Day[]> = signal([]);
  times: string[] = times;
  mobileView: boolean = false;

  constructor(
    private http: HttpClient,
    private responsive: BreakpointObserver
  ) {
    this.loadData();
    this.responsive
      .observe('(max-width: 992px)')
      .subscribe((result) => (this.mobileView = result.matches));
  }

  private loadData() {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.days.set(data.days);
      this.stages.set(data.stages);
    });
  }
}
