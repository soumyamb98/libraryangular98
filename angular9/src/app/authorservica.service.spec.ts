import { TestBed } from '@angular/core/testing';

import { AuthorservicaService } from './authorservica.service';

describe('AuthorservicaService', () => {
  let service: AuthorservicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorservicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
