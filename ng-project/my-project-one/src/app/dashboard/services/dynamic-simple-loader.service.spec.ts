import { TestBed } from '@angular/core/testing';

import { DynamicSimpleLoaderService } from './dynamic-simple-loader.service';

describe('DynamicModuleLoaderService', () => {
  let service: DynamicSimpleLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicSimpleLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
