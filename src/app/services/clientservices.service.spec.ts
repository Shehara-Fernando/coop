import { TestBed } from '@angular/core/testing';

import { ClientservicesService } from './clientservices.service';

describe('ClientservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientservicesService = TestBed.get(ClientservicesService);
    expect(service).toBeTruthy();
  });
});
