import { TestBed } from '@angular/core/testing';

import { GQRService } from './gqr.service';

describe('GQRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GQRService = TestBed.get(GQRService);
    expect(service).toBeTruthy();
  });
});
