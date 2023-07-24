import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogComponent } from './custom-dialog.component';
import { NxModalModule } from '@aposin/ng-aquila/modal';

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDialogComponent],
      imports: [NxModalModule],
    });
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
