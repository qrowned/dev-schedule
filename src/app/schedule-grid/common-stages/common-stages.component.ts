import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DialogService } from 'src/app/dialog.service';
import { Day, Stage, Talk } from 'src/types';

@Component({
  selector: 'app-common-stages',
  templateUrl: './common-stages.component.html',
  styleUrls: ['./common-stages.component.scss'],
})
export class CommonStagesComponent {
  @Input() filteredStages: Stage[] = [];
  @Input() day?: Day;
  times: string[] = this.dataService.times;
  mobileView: boolean = false;

  constructor(
    public dialogService: DialogService,
    private dataService: DataService
  ) {}

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

  // Fetch every talks from the stages variable which happen on a certain day and return them as an array
  getTalksByDay(day: Day): Talk[] {
    return this.filteredStages
      .map((stage) => stage.talks)
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
}
