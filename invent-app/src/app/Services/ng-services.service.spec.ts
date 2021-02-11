import { TestBed } from '@angular/core/testing';

import { NgServicesService } from './ng-services.service';

describe('NgServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgServicesService = TestBed.get(NgServicesService);
    expect(service).toBeTruthy();
  });
});
