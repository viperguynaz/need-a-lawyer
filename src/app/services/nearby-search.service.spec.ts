import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { NearbySearchService } from './nearby-search.service';

describe('NearbySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [NearbySearchService]
    });
  });

  it('should be created', inject([NearbySearchService], (service: NearbySearchService) => {
    expect(service).toBeTruthy();
  }));
});
