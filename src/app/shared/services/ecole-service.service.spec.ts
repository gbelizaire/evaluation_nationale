import { TestBed, inject } from '@angular/core/testing';

import { EcoleServiceService } from './ecole-service.service';

describe('EcoleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcoleServiceService]
    });
  });

  it('should ...', inject([EcoleServiceService], (service: EcoleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
