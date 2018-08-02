import { TestBed, inject } from '@angular/core/testing';

import { NearbySearchService } from './nearby-search.service';

describe('NearbySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NearbySearchService]
    });
  });

  it('should be created', inject([NearbySearchService], (service: NearbySearchService) => {
    expect(service).toBeTruthy();
  }));
});
