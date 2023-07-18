import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
})
export class CustomDialogComponent implements AfterViewInit {
  dialogService: DialogService;
  @ViewChild('talkdialog') talkDialogTemplate!: TemplateRef<any>;
  @ViewChild('presenterdialog') presenterDialogTemplate!: TemplateRef<any>;

  constructor(dialogService: DialogService) {
    this.dialogService = dialogService;
  }

  ngAfterViewInit(): void {
    this.dialogService.setTalkDialogTemplate(this.talkDialogTemplate);
    this.dialogService.setPresenterDialogTemplate(this.presenterDialogTemplate);
  }
}
