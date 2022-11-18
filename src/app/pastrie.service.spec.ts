import { TestBed } from '@angular/core/testing';

import { PastrieService } from './pastrie.service';

describe('PastrieService', () => {
  let service: PastrieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastrieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
