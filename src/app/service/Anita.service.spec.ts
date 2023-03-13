import { TestBed } from '@angular/core/testing';

import { AnitaService } from './Anita.service';

describe('MovieService', () => {
  let service: AnitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
