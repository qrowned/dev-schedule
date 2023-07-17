import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterAvatarComponent } from './presenter-avatar.component';

describe('PresenterAvatarComponent', () => {
  let component: PresenterAvatarComponent;
  let fixture: ComponentFixture<PresenterAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenterAvatarComponent]
    });
    fixture = TestBed.createComponent(PresenterAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
