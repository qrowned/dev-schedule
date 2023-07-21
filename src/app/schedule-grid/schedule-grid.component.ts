import { Component, Input, OnInit, WritableSignal } from '@angular/core';
import { Day, Stage, Talk } from 'src/types';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-schedule-grid',
  templateUrl: './schedule-grid.component.html',
  styleUrls: ['./schedule-grid.component.scss'],
})
export class ScheduleGridComponent implements OnInit {
  @Input() day?: Day;
  days: WritableSignal<Day[]>;
  stages: WritableSignal<Stage[]>;
  times: string[];
  mobileView: boolean = false;
  stageFilter?: string;

  constructor(
    public dialogService: DialogService,
    private dataService: DataService,
    private responsive: BreakpointObserver
  ) {
    this.times = dataService.times;
    this.days = this.dataService.days;
    this.stages = this.dataService.stages;
  }

  ngOnInit(): void {
    this.responsive
      .observe('(max-width: 992px)')
      .subscribe((result) => (this.mobileView = result.matches));
  }

  // Fetch every talks from the stages variable which happen on a certain day and return them as an array
  getTalksByDay(day: Day): Talk[] {
    return this.stages()
      .filter((stage) =>
        this.stageFilter && this.mobileView // check if the stageFilter is set and if the mobile view is active
          ? stage.name === this.stageFilter
          : true
      )
      ?.map((stage) => stage.talks)
      .flat()
      .filter((talk) => {
        try {
          let dayId: string = talk.time.split(',')[0].split(' ')[1];
          return dayId === day.id.toString();
        } catch (error) {
          return [];
        }
      });
  }

  getTalksByTime(day: Day, time: string): Talk[] {
    return this.getTalksByDay(day).filter((talk) => talk.time.includes(time));
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
          return [];
        }
      })
      .find((talk) => talk.time.includes(time));
  }

  getFilteredStages(name: string | undefined) {
    if (!name || !this.mobileView) return this.stages(); // check if name is undefined or if the mobile view is active

    return this.stages().filter((stage) => stage.name === name);
  }
}
