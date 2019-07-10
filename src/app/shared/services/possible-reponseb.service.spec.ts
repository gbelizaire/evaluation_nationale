import { TestBed, inject } from '@angular/core/testing';

import { PossibleReponsebService } from './possible-reponseb.service';

describe('PossibleReponsebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PossibleReponsebService]
    });
  });

  it('should ...', inject([PossibleReponsebService], (service: PossibleReponsebService) => {
    expect(service).toBeTruthy();
  }));
});
