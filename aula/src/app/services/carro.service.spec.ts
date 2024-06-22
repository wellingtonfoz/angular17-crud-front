import { TestBed, inject } from '@angular/core/testing';

import { CarroService } from './carro.service';

describe('CarroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarroService]
    });
  });

  it('should be created', inject([CarroService], (service: CarroService) => {
    expect(service).toBeTruthy();
  }));
});