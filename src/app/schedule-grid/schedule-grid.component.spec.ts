import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGridComponent } from './schedule-grid.component';

describe('ScheduleGridComponent', () => {
  let component: ScheduleGridComponent;
  let fixture: ComponentFixture<ScheduleGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleGridComponent]
    });
    fixture = TestBed.createComponent(ScheduleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
