import { TestBed } from '@angular/core/testing';

import { VetcareLiaisonService } from './vetcare-liaison.service';

describe('VetcareLiaisonService', () => {
  let service: VetcareLiaisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetcareLiaisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
