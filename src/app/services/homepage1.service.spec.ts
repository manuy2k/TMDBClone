import { TestBed } from '@angular/core/testing';

import { Homepage1Service } from './homepage1.service';

describe('Homepage1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Homepage1Service = TestBed.get(Homepage1Service);
    expect(service).toBeTruthy();
  });
});
