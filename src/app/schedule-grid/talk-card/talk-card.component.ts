import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DialogService } from 'src/app/dialog.service';
import { Stage, Talk } from 'src/types';

@Component({
  selector: 'app-talk-card',
  templateUrl: './talk-card.component.html',
  styleUrls: ['./talk-card.component.scss'],
})
export class TalkCardComponent {
  @Input() talk?: Talk;
  @Input() stage?: Stage;

  constructor(
    public dataService: DataService,
    public dialogService: DialogService
  ) {}
}
