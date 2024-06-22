import { TestBed, inject } from '@angular/core/testing';

import { MarcaService } from './marca.service';

describe('MarcaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarcaService]
    });
  });

  it('should be created', inject([MarcaService], (service: MarcaService) => {
    expect(service).toBeTruthy();
  }));
});