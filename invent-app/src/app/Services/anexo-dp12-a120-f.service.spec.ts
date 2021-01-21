import { TestBed } from '@angular/core/testing';

import { ANEXODP12A120FService } from './anexo-dp12-a120-f.service';

describe('ANEXODP12A120FService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ANEXODP12A120FService = TestBed.get(ANEXODP12A120FService);
    expect(service).toBeTruthy();
  });
});
