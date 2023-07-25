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

  getFilteredStages(name: string | undefined) {
    if (!name || !this.dataService.mobileView) return this.stages(); // check if name is undefined or if the mobile view is active

    return this.stages().filter((stage) => stage.name === name);
  }
}
