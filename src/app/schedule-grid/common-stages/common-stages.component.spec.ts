import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStagesComponent } from './common-stages.component';

describe('CommonStagesComponent', () => {
  let component: CommonStagesComponent;
  let fixture: ComponentFixture<CommonStagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonStagesComponent]
    });
    fixture = TestBed.createComponent(CommonStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
