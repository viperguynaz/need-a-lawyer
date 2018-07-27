import { TestBed, inject } from '@angular/core/testing';

import { UsStatesService } from './us-states.service';

describe('UsStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsStatesService]
    });
  });

  it('should be created', inject([UsStatesService], (service: UsStatesService) => {
    expect(service).toBeTruthy();
  }));

  it('should return AZ', inject([UsStatesService], (service: UsStatesService) => {
    expect(service.getStateByName('Arizona').abbreviation).toBe('AZ');
  }));

});
