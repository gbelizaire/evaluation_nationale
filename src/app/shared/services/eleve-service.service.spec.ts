import { TestBed, inject } from '@angular/core/testing';

import { EleveServiceService } from './eleve-service.service';

describe('EleveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EleveServiceService]
    });
  });

  it('should ...', inject([EleveServiceService], (service: EleveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
