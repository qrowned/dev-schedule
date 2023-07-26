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

  constructor(
    public dialogService: DialogService,
    public dataService: DataService
  ) {}

  getTalksByTime(day: Day, time: string): Talk[] {
    return this.getTalksByDay(day).filter((talk) =>
      time.split(' - ')[0].includes(talk.startTime)
    );
  }

  getTalkByStageAndTime(
    stage: Stage,
    day: Day,
    time: string
  ): Talk | undefined {
    return stage.talks
      .filter((talk) => talk.day == day.id)
      .find((talk) => time.split(' - ')[0].includes(talk.startTime));
  }

  // Fetch every talks from the stages variable which happen on a certain day and return them as an array
  getTalksByDay(day: Day): Talk[] {
    return this.filteredStages
      .map((stage) => stage.talks)
      .flat()
      .filter((talk) => talk.day == day.id);
  }
}
