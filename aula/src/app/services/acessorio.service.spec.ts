import { TestBed } from '@angular/core/testing';

import { AcessorioService } from './acessorio.service';

describe('AcessorioService', () => {
  let service: AcessorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcessorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
