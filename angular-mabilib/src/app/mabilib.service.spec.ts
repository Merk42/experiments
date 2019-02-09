import { TestBed, inject } from '@angular/core/testing';

import { MabilibService } from './mabilib.service';

describe('MabilibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MabilibService]
    });
  });

  it('should be created', inject([MabilibService], (service: MabilibService) => {
    expect(service).toBeTruthy();
  }));
});
