import { TestBed } from '@angular/core/testing';

import { DataCallService } from './data-call.service';

describe('DataCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCallService = TestBed.get(DataCallService);
    expect(service).toBeTruthy();
  });
});
