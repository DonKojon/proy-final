import { TestBed } from '@angular/core/testing';

import { PersonalTropaService } from './personal-tropa.service';

describe('PersonalTropaService', () => {
  let service: PersonalTropaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalTropaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
