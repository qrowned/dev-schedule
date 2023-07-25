import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStageComponent } from './main-stage.component';

describe('MainStageComponent', () => {
  let component: MainStageComponent;
  let fixture: ComponentFixture<MainStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainStageComponent]
    });
    fixture = TestBed.createComponent(MainStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
