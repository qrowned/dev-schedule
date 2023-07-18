import { Injectable, TemplateRef } from '@angular/core';
import { NxDialogService } from '@aposin/ng-aquila/modal';
import { Presenter, Talk } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  talkDialogTemplate?: TemplateRef<any>;
  presenterDialogTemplate?: TemplateRef<any>;

  constructor(private dialogService: NxDialogService) {}

  openTalkDialog(data: Talk | undefined) {
    if (!this.talkDialogTemplate) return;

    this.dialogService.open(this.talkDialogTemplate, {
      data: data,
      showCloseIcon: true,
      ariaLabelledBy: 'talk-dialog',
    });
  }

  openPresenterDialog(data: Presenter | undefined) {
    if (!this.presenterDialogTemplate) return;

    this.dialogService.open(this.presenterDialogTemplate, {
      data: data,
      showCloseIcon: true,
      ariaLabelledBy: 'presenter-dialog',
    });
  }

  setTalkDialogTemplate(template: TemplateRef<any>) {
    this.talkDialogTemplate = template;
  }

  setPresenterDialogTemplate(template: TemplateRef<any>) {
    this.presenterDialogTemplate = template;
  }
}
