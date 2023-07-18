import { Component, Input, WritableSignal } from '@angular/core';
import { Presenter, Stage, Talk } from 'src/types';
import { DataService } from '../data.service';
import { NxIconRegistry } from '@aposin/ng-aquila/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-presenter-profile',
  templateUrl: './presenter-profile.component.html',
  styleUrls: ['./presenter-profile.component.scss'],
})
export class PresenterProfileComponent {
  @Input() presenter?: Presenter;
  stages: WritableSignal<Stage[]>;

  constructor(
    public dialogService: DialogService,
    private dataService: DataService,
    private readonly nxIconRegistry: NxIconRegistry,
    domSanitizer: DomSanitizer
  ) {
    this.stages = this.dataService.stages;

    this.nxIconRegistry.addSvgIcon(
      'linkedin-custom',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );

    this.nxIconRegistry.registerFont('fa', 'fa', 'fa-');
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
