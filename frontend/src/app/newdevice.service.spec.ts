import { TestBed } from '@angular/core/testing';

import { NewdeviceService } from './newdevice.service';

describe('NewdeviceService', () => {
  let service: NewdeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewdeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
