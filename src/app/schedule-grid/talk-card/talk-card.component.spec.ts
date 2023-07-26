import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkCardComponent } from './talk-card.component';

describe('TalkCardComponent', () => {
  let component: TalkCardComponent;
  let fixture: ComponentFixture<TalkCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalkCardComponent]
    });
    fixture = TestBed.createComponent(TalkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
