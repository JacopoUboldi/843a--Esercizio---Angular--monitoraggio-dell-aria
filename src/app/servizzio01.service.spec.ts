import { TestBed } from '@angular/core/testing';

import { Servizzio01Service } from './servizzio01.service';

describe('Servizzio01Service', () => {
  let service: Servizzio01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servizzio01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
