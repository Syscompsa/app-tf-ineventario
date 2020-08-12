import { TestBed } from '@angular/core/testing';

import { SettingsCOontsService } from './settings-coonts.service';

describe('SettingsCOontsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsCOontsService = TestBed.get(SettingsCOontsService);
    expect(service).toBeTruthy();
  });
});
