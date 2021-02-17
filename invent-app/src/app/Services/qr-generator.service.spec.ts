import { TestBed } from '@angular/core/testing';

import { QRGeneratorService } from './qr-generator.service';

describe('QRGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QRGeneratorService = TestBed.get(QRGeneratorService);
    expect(service).toBeTruthy();
  });
});
