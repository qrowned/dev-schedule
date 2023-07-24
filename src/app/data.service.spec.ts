import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('DataServiceService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be a data.json created', () => {
    const req = httpMock.match('assets/data.json');
    expect(req.length).toBe(1);
  });

  it('should have two signals created', () => {
    expect(service.days).toBeTruthy();
    expect(service.stages).toBeTruthy();
  });
});
