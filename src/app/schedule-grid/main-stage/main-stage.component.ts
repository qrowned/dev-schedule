import { Component, Input } from '@angular/core';
import { Day } from 'src/types';

@Component({
  selector: 'app-main-stage',
  templateUrl: './main-stage.component.html',
  styleUrls: ['./main-stage.component.scss'],
})
export class MainStageComponent {
  @Input() day?: Day;
  @Input() filteredStages?: string;
}
