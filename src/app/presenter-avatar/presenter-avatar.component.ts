import { Component, Input, WritableSignal } from '@angular/core';
import { Presenter, Stage, Talk } from 'src/types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-presenter-avatar',
  templateUrl: './presenter-avatar.component.html',
  styleUrls: ['./presenter-avatar.component.css'],
})
export class PresenterAvatarComponent {
  @Input() presenter?: Presenter;
  stages: WritableSignal<Stage[]>;

  constructor(private dataService: DataService) {
    this.stages = this.dataService.stages;
  }

  getTalksForPresenter(presenter: Presenter): Talk[] {
    return this.stages()
      ?.map((stage) => stage.talks)
      .flat()
      .filter((talk) => {
        return talk.presenters.includes(presenter);
      });
  }
}
