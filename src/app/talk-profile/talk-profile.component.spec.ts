import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkProfileComponent } from './talk-profile.component';
import { NxModalModule } from '@aposin/ng-aquila/modal';

describe('TalkProfileComponent', () => {
  let component: TalkProfileComponent;
  let fixture: ComponentFixture<TalkProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalkProfileComponent],
      imports: [NxModalModule],
    });
    fixture = TestBed.createComponent(TalkProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
