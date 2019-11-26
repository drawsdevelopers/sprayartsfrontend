import { TestBed } from '@angular/core/testing';

import { FesticketService } from './festicket.service';

describe('FesticketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FesticketService = TestBed.get(FesticketService);
    expect(service).toBeTruthy();
  });
});
