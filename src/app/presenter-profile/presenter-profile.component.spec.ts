import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterProfileComponent } from './presenter-profile.component';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { HttpClientModule } from '@angular/common/http';

describe('PresenterProfileComponent', () => {
  let component: PresenterProfileComponent;
  let fixture: ComponentFixture<PresenterProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenterProfileComponent],
      imports: [NxModalModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(PresenterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
