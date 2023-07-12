import { Component } from '@angular/core';
import { Stage } from 'src/types';

import DataJson from 'src/assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  Stages: Stage[] = DataJson.stages;
}

/** Copyright Allianz 2023 */
