import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { Talk } from 'src/types';

@Component({
  selector: 'app-talk-profile',
  templateUrl: './talk-profile.component.html',
  styleUrls: ['./talk-profile.component.css'],
})
export class TalkProfileComponent {
  @Input() talk?: Talk;

  constructor(public dialogService: DialogService) {}
}
