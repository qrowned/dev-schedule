import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { NxModalModule } from '@aposin/ng-aquila/modal';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModalModule],
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
