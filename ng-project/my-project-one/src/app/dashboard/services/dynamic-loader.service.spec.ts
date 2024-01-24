import { TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicLoaderService } from './dynamic-loader.service';

describe('DynamicLoaderService', () => {
  let service: DynamicLoaderService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicLoaderService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
