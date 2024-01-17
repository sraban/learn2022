import { TestBed } from '@angular/core/testing';

import { DynamicModuleLoaderService } from './dynamic-module-loader.service';

describe('DynamicModuleLoaderService', () => {
  let service: DynamicModuleLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicModuleLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
