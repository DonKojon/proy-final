import { TestBed } from '@angular/core/testing';

import { PersonalCuadrosService } from './personal-cuadros.service';

describe('PersonalCuadrosService', () => {
  let service: PersonalCuadrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalCuadrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
