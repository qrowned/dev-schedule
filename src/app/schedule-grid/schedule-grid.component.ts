import {
  ChangeDetectorRef,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NxDialogService } from '@aposin/ng-aquila/modal';
import { Day, Presenter, Stage, Talk } from 'src/types';

@Component({
  selector: 'app-schedule-grid',
  templateUrl: './schedule-grid.component.html',
  styleUrls: ['./schedule-grid.component.css'],
})
export class ScheduleGridComponent {
  @ViewChild('template') templateRef!: TemplateRef<any>;
  @Input() stages?: Stage[];
  @Input() times?: string[];
  @Input() day?: Day;

  constructor(
    private readonly dialogService: NxDialogService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

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

  openTalkDialog(talk: Talk | undefined): void {
    if (!talk) return;

    const dialogRef = this.dialogService.open(this.templateRef, {
      showCloseIcon: true,
      data: talk,
      ariaLabelledBy: 'talk-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
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
