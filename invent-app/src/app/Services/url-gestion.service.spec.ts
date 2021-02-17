import { TestBed } from '@angular/core/testing';

import { URLGestionService } from './url-gestion.service';

describe('URLGestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: URLGestionService = TestBed.get(URLGestionService);
    expect(service).toBeTruthy();
  });
});
