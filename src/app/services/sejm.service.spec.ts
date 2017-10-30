import { TestBed, inject } from '@angular/core/testing';

import { SejmService } from './sejm.service';

describe('SejmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SejmService]
    });
  });

  it('should be created', inject([SejmService], (service: SejmService) => {
    expect(service).toBeTruthy();
  }));
});
