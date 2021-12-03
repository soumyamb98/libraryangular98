import { TestBed } from '@angular/core/testing';

import { BooksserviveService } from './booksservive.service';

describe('BooksserviveService', () => {
  let service: BooksserviveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksserviveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
