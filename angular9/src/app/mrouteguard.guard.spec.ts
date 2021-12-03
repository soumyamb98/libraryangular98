import { TestBed } from '@angular/core/testing';

import { MrouteguardGuard } from './mrouteguard.guard';

describe('MrouteguardGuard', () => {
  let guard: MrouteguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MrouteguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
