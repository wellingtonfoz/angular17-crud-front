import { TestBed, inject } from '@angular/core/testing';

import { AcessorioService } from './acessorio.service';

describe('AcessorioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcessorioService]
    });
  });

  it('should be created', inject([AcessorioService], (service: AcessorioService) => {
    expect(service).toBeTruthy();
  }));
});