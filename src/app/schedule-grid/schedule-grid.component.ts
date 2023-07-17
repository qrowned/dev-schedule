import {
  ChangeDetectorRef,
  Component,
  Input,
  TemplateRef,
  ViewChild,
  WritableSignal,
  signal,
} from '@angular/core';
import { NxDialogService } from '@aposin/ng-aquila/modal';
import { Day, Presenter, Stage, Talk } from 'src/types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-schedule-grid',
  templateUrl: './schedule-grid.component.html',
  styleUrls: ['./schedule-grid.component.css'],
})
export class ScheduleGridComponent {
  @ViewChild('talkmodal') talkRef!: TemplateRef<Talk>;
  @ViewChild('presentermodal') presenterRef!: TemplateRef<Presenter>;
  @Input() day?: Day;
  days: WritableSignal<Day[]>;
  stages: WritableSignal<Stage[]>;
  times: string[];

  constructor(
    private readonly dialogService: NxDialogService,
    private readonly _cdr: ChangeDetectorRef,
    private dataService: DataService
  ) {
    this.times = dataService.times;
    this.days = this.dataService.days;
    this.stages = this.dataService.stages;
  }

  // Fetch every talks from the stages variable which happen on a certain day and return them as an array
  getTalksByDay(day: Day): Talk[] | undefined {
    return this.stages()
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

  openTalkDialog(talk: Talk | undefined): void {
    if (!talk) return;

    const dialogRef = this.dialogService.open(this.talkRef, {
      showCloseIcon: true,
      data: talk,
      ariaLabelledBy: 'talk-dialog',
    });

    dialogRef.afterClosed().subscribe();
  }

  openPresenterDialog(presenter: Presenter): void {
    const dialogRef = this.dialogService.open(this.presenterRef, {
      showCloseIcon: true,
      data: presenter,
      ariaLabelledBy: 'presenter-dialog',
    });

    dialogRef.afterClosed().subscribe();
  }

  formatPresenterNames(presenters: Presenter[]): string {
    return presenters
      .map(
        (presenter: Presenter) =>
          presenter.name + ' (' + presenter.company + ')'
      )
      .join(', ');
  }
}
