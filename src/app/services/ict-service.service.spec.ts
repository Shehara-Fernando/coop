import { TestBed } from '@angular/core/testing';

import { IctServiceService } from './ict-service.service';

describe('IctServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IctServiceService = TestBed.get(IctServiceService);
    expect(service).toBeTruthy();
  });
});
