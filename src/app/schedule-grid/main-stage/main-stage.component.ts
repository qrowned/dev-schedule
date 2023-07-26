import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DialogService } from 'src/app/dialog.service';
import { Day, Stage, Talk } from 'src/types';

@Component({
  selector: 'app-main-stage',
  templateUrl: './main-stage.component.html',
  styleUrls: ['./main-stage.component.scss'],
})
export class MainStageComponent {
  @Input() talks: Talk[] = [];
  @Input() stage!: Stage;
  times: string[] = this.dataService.times;

  constructor(
    public dataService: DataService,
    public dialogService: DialogService
  ) {}

  getTalksByTime(time: string): Talk[] {
    return this.talks.filter((talk) =>
      time.split(' - ')[0].includes(talk.startTime)
    );
  }
}
