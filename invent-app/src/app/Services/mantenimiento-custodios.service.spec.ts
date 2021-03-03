import { TestBed } from '@angular/core/testing';

import { MantenimientoCustodiosService } from './mantenimiento-custodios.service';

describe('MantenimientoCustodiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MantenimientoCustodiosService = TestBed.get(MantenimientoCustodiosService);
    expect(service).toBeTruthy();
  });
});
