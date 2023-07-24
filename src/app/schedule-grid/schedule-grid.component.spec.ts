import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGridComponent } from './schedule-grid.component';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { HttpClientModule } from '@angular/common/http';

describe('ScheduleGridComponent', () => {
  let component: ScheduleGridComponent;
  let fixture: ComponentFixture<ScheduleGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleGridComponent],
      imports: [NxModalModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(ScheduleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
