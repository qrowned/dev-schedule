import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterProfileComponent } from './presenter-profile.component';

describe('PresenterProfileComponent', () => {
  let component: PresenterProfileComponent;
  let fixture: ComponentFixture<PresenterProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenterProfileComponent],
    });
    fixture = TestBed.createComponent(PresenterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
