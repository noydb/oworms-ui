import { TestBed } from '@angular/core/testing';

import { MasterPasswordGuard } from './master-password.guard';

describe('MasterPasswordGuard', () => {
  let guard: MasterPasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MasterPasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
