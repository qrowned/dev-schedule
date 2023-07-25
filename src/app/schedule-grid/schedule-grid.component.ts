import { Component, Input, OnInit, WritableSignal } from '@angular/core';
import { Day, Stage, Talk } from 'src/types';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-schedule-grid',
  templateUrl: './schedule-grid.component.html',
  styleUrls: ['./schedule-grid.component.scss'],
})
export class ScheduleGridComponent {
  @Input() day?: Day;
  days: WritableSignal<Day[]>;
  stages: WritableSignal<Stage[]>;
  times: string[];
  stageFilter?: string;

  constructor(
    public dialogService: DialogService,
    public dataService: DataService
  ) {
    this.times = dataService.times;
    this.days = this.dataService.days;
    this.stages = this.dataService.stages;
  }

  getFilteredStages() {
    if (!this.stageFilter || !this.dataService.mobileView) return this.stages(); // check if name is undefined or if the mobile view is active

    return this.stages().filter((stage) => stage.name === this.stageFilter);
  }

  getCommonStages(): Stage[] {
    return this.getFilteredStages().filter(
      (stage) => stage.name !== 'Main Stage'
    );
  }

  getMainStageTalks(day: Day): Talk[] {
    return (
      this.getFilteredStages()
        .find((stage) => stage.name === 'Main Stage')
        ?.talks.filter((talk) => talk.day == day.id) || []
    );
  }

  getStartMainStageTalks(): Talk[] {
    const firstCommon = this.getCommonStages()
      .flatMap((stage) => stage.talks)
      .sort((a, b) => b.startTime.localeCompare(a.startTime))[0];
    if (!firstCommon) return this.getMainStageTalks(this.day!);

    return this.getMainStageTalks(this.day!).filter(
      (talk) => talk.startTime <= firstCommon.startTime
    );
  }

  getEndMainStageTalks(): Talk[] {
    const lastCommon = this.getCommonStages()
      .flatMap((stage) => stage.talks)
      .sort((a, b) => a.endTime.localeCompare(b.endTime))[0];
    if (!lastCommon) return [];

    return this.getMainStageTalks(this.day!).filter(
      (talk) => lastCommon.endTime <= talk.startTime
    );
  }
}
