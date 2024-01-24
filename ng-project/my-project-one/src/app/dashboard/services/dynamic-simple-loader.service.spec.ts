import { TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicSimpleLoaderService } from './dynamic-simple-loader.service';

describe('DynamicModuleLoaderService', () => {
  let service: DynamicSimpleLoaderService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicSimpleLoaderService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
