import { TestBed, inject } from '@angular/core/testing';

import { ReponseService } from './reponse.service';

describe('ReponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReponseService]
    });
  });

  it('should ...', inject([ReponseService], (service: ReponseService) => {
    expect(service).toBeTruthy();
  }));
});
